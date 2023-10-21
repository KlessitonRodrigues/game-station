import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import Loading from 'src/UI/base/Loading';
import { dbClient } from 'src/config/db';
import useAppContext from 'src/hooks/useAppContext';
import useRoutesContext from 'src/hooks/useRoutesContext';
import useUIState from 'src/hooks/useScreenState';
import { nodeJS } from 'src/utils/electron/nodeJS';
import { getCachedCovers } from 'src/utils/images/imageCache';

import { GameListBar } from './services/GameListBar';
import { GameListGrid } from './services/GameListGrid';
import { LayoutTypeDialog } from './services/LayoutTypeDialog';
import { Container } from './styled';

const GameList = (props: App.Props.GameList) => {
  const { mode } = props;
  const screen = useUIState();
  const app = useAppContext();
  const routes = useRoutesContext();
  const [gameList, setGameList] = useState<AppDB.Models.GameInfo[]>([]);

  useEffect(() => {
    const games = dbClient.games.read();
    if (!nodeJS.isNodeAvailable) setGameList(games);
    else {
      screen.setLoading(true);
      getCachedCovers(games)
        .then(setGameList)
        .finally(() => screen.setLoading(false));
    }
  }, []);

  useEffect(() => {
    app.setBgImage(gameList[screen.focus]?.background);
  }, [focus, gameList]);

  return (
    <Container>
      <If check={mode === 'list'}>
        <GameListBar
          active={screen.active}
          gameList={gameList}
          gameIndex={screen.focus}
          onChangeGame={index => index < gameList.length && screen.setFocus(index)}
          onActiveGame={() => screen.setActive(!screen.active)}
          onStartGame={() => {}}
        />
      </If>

      <If check={mode === 'grid'}>
        <GameListGrid
          active={screen.active}
          gameList={gameList}
          gameIndex={screen.focus}
          onChangeGame={index => index < gameList.length && screen.setFocus(index)}
          onActiveGame={() => screen.setActive(!screen.active)}
          onStartGame={() => {}}
        />
      </If>

      <If check={app.firstRun}>
        <LayoutTypeDialog
          onSelect={type => {
            app.setFirstRun(false);
            if (type === 'grid') routes.setPath('games/list');
          }}
        />
      </If>

      <Loading show={screen.loading} type="fullScreen" title="Optimizing Images" />
    </Container>
  );
};

export default GameList;
