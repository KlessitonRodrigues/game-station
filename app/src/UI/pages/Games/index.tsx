import { useEffect, useMemo, useState } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameList from 'src/UI/components/GameList';
import GameInfoForm from 'src/UI/forms/GameInfo';
import { dbClient } from 'src/config/db';
import { nodeClient } from 'src/config/node';
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
  const onPressed = useGamepad();
  const [gameList, setGameList] = useState<AppDB.Models.GameInfo[]>([]);

  const [, screen, mode] = path.split('/');
  const games = dbClient.games.read();

  useEffect(() => {
    onPressed('ButtonY', () => {
      screen === 'add' ? setPath('games/list/bar') : setPath('games/add');
    });
    onPressed('ButtonX', () => {
      mode === 'bar' ? setPath('games/list/grid') : setPath('games/list/bar');
    });
  }, [onPressed]);

  useEffect(() => {
    if (!nodeJS.isNodeAvailable) setGameList(games);
    else {
      setLoading(true);
      getCachedCovers(games)
        .then(setGameList)
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [games.length]);

  useEffect(() => {
    setBgImage(gameList[focus]?.background);
  }, [focus, gameList.length]);

  const game = useMemo(() => gameList[focus], [focus, gameList.length]);

  return (
    <PageContainer>
      <If check={path.includes('games/list')}>
        <GameList
          mode={mode as 'grid' | 'bar'}
          index={focus}
          game={game}
          list={gameList}
          onActiveGame={() => {}}
          onChangeGame={index => focus < gameList.length && setFocus(index)}
          onStartGame={path => nodeClient.cmd.run(path)}
          active={false}
        />
      </If>
      <If check={path === 'games/add'} true={<GameInfoForm />} />
    </PageContainer>
  );
};

export default GamesPage;
