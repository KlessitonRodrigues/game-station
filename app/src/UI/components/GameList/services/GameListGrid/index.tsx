import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import useGamepad from 'src/hooks/useGamepad';

import { Container, Grid, GridItem } from './styled';

export const GameListGrid = (props: App.Props.GameList) => {
  const { gameList, gameIndex, onChangeGame, onStartGame } = props;
  const onPressed = useGamepad();

  useEffect(() => {
    onPressed('ArrowLeft', () => onChangeGame(gameIndex - 1));
    onPressed('ArrowRight', () => onChangeGame(gameIndex + 1));
    onPressed('ArrowDown', () => onChangeGame(gameIndex + 4));
    onPressed('ArrowUp', () => onChangeGame(gameIndex - 4));
    // onPressed('ButtonStart', () => onStartGame(gameIndex));
  }, [onPressed]);

  return (
    <Container>
      <Grid>
        {gameList.map(game => (
          <GridItem key={game.name} img={game.cover} focus={gameIndex} />
        ))}
      </Grid>
      <GamepadButtons
        buttons={[
          { content: 'A', label: 'Details' },
          { content: 'Y', label: 'Add Game' },
          { content: 'X', label: 'List View' },
        ]}
      />
    </Container>
  );
};
