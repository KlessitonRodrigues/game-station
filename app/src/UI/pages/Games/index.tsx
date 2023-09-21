import { useEffect } from 'react';
import If from 'src/UI/base/If';
import PageContainer from 'src/UI/base/PageContainer';
import GameList from 'src/UI/components/GameList';
import GameDetailsForm from 'src/UI/forms/GameDetails';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

const GamesPage = () => {
  const [path, setPath] = usePath();
  const onPressed = useGamepad();

  useEffect(() => {
    onPressed('ButtonY', () => {
      path === 'games/add' ? setPath('games/list/bar') : setPath('games/add');
    });
    onPressed('ButtonX', () => {
      path === 'games/list/bar' ? setPath('games/list/grid') : setPath('games/list/bar');
    });
  }, [onPressed]);

  return (
    <PageContainer>
      <If check={path === 'games/list/bar'} true={<GameList mode="list" />} />
      <If check={path === 'games/list/grid'} true={<GameList mode="grid" />} />
      <If check={path === 'games/add'} true={<GameDetailsForm />} />
    </PageContainer>
  );
};

export default GamesPage;
