import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameList from 'src/UI/components/GameList';
import GameDetailsForm from 'src/UI/forms/GameDetails';
import useGamepad from 'src/hooks/useGamepad';
import useRoutesContext from 'src/hooks/useRoutesContext';

const GamesPage = () => {
  const { path, setPath } = useRoutesContext();
  const onPressed = useGamepad();
  const [screen, setScreen] = useState<App.Props.GameList['mode']>('list');

  useEffect(() => {
    onPressed('ButtonY', () => {
      if (path === 'games/add') setPath('games/list');
      else setPath('games/add');
    });
    onPressed('ButtonX', () => setScreen(screen === 'list' ? 'grid' : 'list'));
  }, [onPressed]);

  return (
    <PageContainer>
      <If check={path === 'games/list_'} true={<GameList mode={screen} />} />
      <If check={path === 'games/list'} true={<GameDetailsForm />} />
    </PageContainer>
  );
};

export default GamesPage;
