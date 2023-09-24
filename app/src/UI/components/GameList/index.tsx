import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import Loading from 'src/UI/base/Loading';
import { dbClient } from 'src/config/db';
import useGlobalContext from 'src/hooks/useGlobalContext';
import useUIState from 'src/hooks/useUIState';
import { getGamesImageCache } from 'src/utils/images/imageCache';

import { GameListBar } from './services/GameListBar';
import { GameListGrid } from './services/GameListGrid';
import { Container } from './styled';

const GameList = (props: App.Props.GameList) => {
  const { mode } = props;
  const { focus, active, loading, setUI } = useUIState();
  const [global, setGlobal] = useGlobalContext();
  const [gameList, setGameList] = useState<AppDB.Models.GameInfo[]>([]);

  useEffect(() => {
    const games = dbClient.games.read();
    setUI('loading', true);
    getGamesImageCache(games)
      .then(setGameList)
      .finally(() => setUI('loading', false));
  }, []);

  useEffect(() => {
    const imgBg = gameList[focus]?.background;
    setGlobal({ ...global, imgBg });
  }, [focus, gameList]);

  return (
    <Container>
      <If check={mode === 'list'}>
        <GameListBar
          active={active}
          gameList={gameList}
          gameIndex={focus}
          onChangeGame={index => index < gameList.length && setUI('focus', index)}
          onActiveGame={() => setUI('active', !active)}
          onStartGame={() => {}}
        />
      </If>
      <If check={mode === 'grid'}>
        <GameListGrid
          active={active}
          gameList={gameList}
          gameIndex={focus}
          onChangeGame={index => index < gameList.length && setUI('focus', index)}
          onActiveGame={() => setUI('active', !active)}
          onStartGame={() => {}}
        />
      </If>
      {loading && <Loading />}
    </Container>
  );
};

export default GameList;
