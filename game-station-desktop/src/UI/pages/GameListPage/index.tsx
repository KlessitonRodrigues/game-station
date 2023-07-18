import { BrowserResources } from 'src/UI/components/BrowseResource';
import GameListBar from 'src/UI/components/GameList';
import PageContainer from 'src/UI/components/PageContainer';

const GameListPage = () => {
  return (
    <PageContainer>
      {
        //<GameListBar />
      }
      <BrowserResources />
    </PageContainer>
  );
};

export default GameListPage;
