import { useEffect, useState } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameListBar from 'src/UI/components/GameList';
import NewGameForm from 'src/UI/forms/NewGame';
import useGamepad from 'src/hooks/useGamepad';

const GamesPage = () => {
  const [pressed] = useGamepad();
  const [screen, setScreen] = useState<'list' | 'grid' | 'add'>('add');

  useEffect(() => {
    if (pressed.includes('ButtonY')) screen === 'list' ? setScreen('add') : setScreen('list');
  }, [pressed]);

  return (
    <PageContainer>
      <If check={screen === 'list'} true={<GameListBar />} />
      <If check={screen === 'grid'} true={<GameListBar />} />
      <If check={screen === 'add'} true={<NewGameForm />} />
    </PageContainer>
  );
};

export default GamesPage;
