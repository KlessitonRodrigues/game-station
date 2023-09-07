import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameListBar from 'src/UI/components/GameList';
import NewGameForm from 'src/UI/forms/NewGame';
import useGamepad from 'src/hooks/useGamepad';

const GamesPage = () => {
  const onPressed = useGamepad();
  const [screen, setScreen] = useState<App.Utils.GamePageScreens>('add');

  useEffect(() => {
    onPressed('ButtonY', () => (screen === 'list' ? setScreen('add') : setScreen('list')));
  }, [onPressed]);

  return (
    <PageContainer>
      <If check={screen === 'list'} true={<GameListBar />} />
      <If check={screen === 'grid'} true={<GameListBar />} />
      <If check={screen === 'add'} true={<NewGameForm />} />
    </PageContainer>
  );
};

export default GamesPage;
