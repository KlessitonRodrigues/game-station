import { useEffect } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameListBar from 'src/UI/components/GameList';
import GameDetailsForm from 'src/UI/forms/GameDetails';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

const GamesPage = () => {
  const [path, setPath] = usePath();
  const onPressed = useGamepad();

  useEffect(() => {
    onPressed('ButtonY', () => {
      if (path === 'games/add') return setPath('games/list/bar');
      setPath('games/add');
    });
  }, [onPressed]);

  return (
    <PageContainer>
      <If check={path === 'games/list/bar'} true={<GameListBar />} />
      <If check={path === 'games/list/grid'} true={<GameListBar />} />
      <If check={path === 'games/add'} true={<GameDetailsForm />} />
    </PageContainer>
  );
};

export default GamesPage;
