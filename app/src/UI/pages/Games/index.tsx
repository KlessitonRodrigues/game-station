import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameList from 'src/UI/components/GameList';
import GameDetailsForm from 'src/UI/forms/GameDetails';
import { dbClient } from 'src/config/db';
import useAppContext from 'src/hooks/useAppContext';
import useGamepad from 'src/hooks/useGamepad';
import useRoutesContext from 'src/hooks/useRoutesContext';
import useScreenState from 'src/hooks/useScreenState';
import { nodeJS } from 'src/utils/electron/nodeJS';
import { getCachedCovers } from 'src/utils/images/imageCache';

const GamesPage = () => {
  const { path, setPath } = useRoutesContext();
  const { setBgImage } = useAppContext();
  const { focus, setFocus, setLoading } = useScreenState();
  const [gameList, setGameList] = useState<AppDB.Models.GameInfo[]>([]);
  const onPressed = useGamepad();
  const [page, screen, mode] = path.split('/');

  useEffect(() => {
    onPressed('ButtonY', () => {
      screen === 'add' ? setPath('games/list/bar') : setPath('games/add');
    });
    onPressed('ButtonX', () => {
      mode === 'bar' ? setPath('games/list/grid') : setPath('games/list/bar');
    });
  }, [onPressed]);

  useEffect(() => {
    const games = dbClient.games.read();
    if (!nodeJS.isNodeAvailable) setGameList(games);
    else {
      setLoading(true);
      getCachedCovers(games)
        .then(setGameList)
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    setBgImage(gameList[focus]?.background);
  }, [focus, gameList]);

  return (
    <PageContainer>
      <If check={path.includes('games/list')}>
        <GameList
          mode={mode === 'bar' ? 'bar' : 'grid'}
          index={focus}
          list={gameList}
          onActiveGame={() => {}}
          onChangeGame={index => focus < gameList.length && setFocus(index)}
          onStartGame={() => {}}
        />
      </If>
      <If check={path === 'games/add'} true={<GameDetailsForm />} />
    </PageContainer>
  );
};

export default GamesPage;
