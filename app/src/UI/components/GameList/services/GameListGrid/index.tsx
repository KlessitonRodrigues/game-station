import { useEffect } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import useGamepad from 'src/hooks/useGamepad';
import { UIButtons } from 'src/utils/constants/UIButtons';

import { Container, Grid, GridItem } from './styled';

export const GameListGrid = (props: App.Props.GameList) => {
  const { gameList, gameIndex, onChangeGame, onStartGame } = props;
  const onPressed = useGamepad();

  useEffect(() => {
    const pos = (gameIndex + 1) % 4;
    onPressed('ArrowLeft', () => pos !== 1 && onChangeGame(gameIndex - 1));
    onPressed('ArrowRight', () => pos !== 0 && onChangeGame(gameIndex + 1));
    onPressed('ArrowDown', () => onChangeGame(gameIndex + 4));
    onPressed('ArrowUp', () => onChangeGame(gameIndex - 4));
    // onPressed('ButtonStart', () => onStartGame(gameIndex));
  }, [onPressed]);

  return (
    <Container>
      <Grid>
        {gameList.map(game => (
          <GridItem key={game.name} imgSrc={game.cover} focus={gameIndex} />
        ))}
      </Grid>
      <GamepadButtons buttons={UIButtons.GameListGrid} />
    </Container>
  );
};
