import { AddGame } from './services/AddGame';
import { GameListBar } from './services/GameListBar';
import { Container } from './styled';

const GameList = () => {
  return (
    <Container>
      {
        //<GameListBar />
      }
      <AddGame />
    </Container>
  );
};

export default GameList;
