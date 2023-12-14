import If from 'src/UI/base/If';
import useAppContext from 'src/hooks/useAppContext';
import useRoutesContext from 'src/hooks/useRoutesContext';

import { GameListBar } from './services/GameListBar';
import { GameListGrid } from './services/GameListGrid';
import { LayoutTypeDialog } from './services/LayoutTypeDialog';
import { Container } from './styled';

const GameList = (props: App.Props.GameList) => {
  const { mode } = props;
  const { setPath } = useRoutesContext();
  const { firstRun, setFirstRun } = useAppContext();

  return (
    <Container>
      <If
        check={mode === 'bar'}
        true={<GameListBar {...props} />}
        false={<GameListGrid {...props} />}
      />

      <If
        check={firstRun}
        true={
          <LayoutTypeDialog
            onSelect={type => {
              setFirstRun(false);
              if (type === 'grid') setPath('games/list/grid');
            }}
          />
        }
      />
    </Container>
  );
};

export default GameList;
