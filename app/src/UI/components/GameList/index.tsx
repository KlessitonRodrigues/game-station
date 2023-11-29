import { useMemo } from 'react';
import If from 'src/UI/base/If';
import Loading from 'src/UI/base/Loading';
import useAppContext from 'src/hooks/useAppContext';
import useRoutesContext from 'src/hooks/useRoutesContext';
import useUIState from 'src/hooks/useScreenState';

import { GameListBar } from './services/GameListBar';
import { GameListGrid } from './services/GameListGrid';
import { LayoutTypeDialog } from './services/LayoutTypeDialog';
import { Container } from './styled';

const GameList = (props: App.Props.GameList) => {
  const { mode, index, list, onChangeGame } = props;
  const { setPath } = useRoutesContext();
  const { firstRun, setFirstRun } = useAppContext();
  const { active, loading, setActive } = useUIState();
  const game = useMemo(() => list[index], [index, list]);

  return (
    <Container>
      <If check={mode === 'bar'}>
        <GameListBar
          active={active}
          game={game}
          list={list}
          index={index}
          onChangeGame={onChangeGame}
          onActiveGame={() => setActive(!active)}
          onStartGame={() => {}}
        />
      </If>

      <If check={mode === 'grid'}>
        <GameListGrid
          active={active}
          game={game}
          list={list}
          index={index}
          onChangeGame={onChangeGame}
          onActiveGame={() => setActive(!active)}
          onStartGame={() => {}}
        />
      </If>

      <If check={firstRun}>
        <LayoutTypeDialog
          onSelect={type => {
            setFirstRun(false);
            if (type === 'grid') setPath('games/list/grid');
          }}
        />
      </If>

      <Loading show={loading} type="fullScreen" title="Optimizing Images" />
    </Container>
  );
};

export default GameList;
