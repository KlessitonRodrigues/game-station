import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import useGamepad from 'src/hooks/useGamepad';
import { UIButtons } from 'src/utils/constants/UIButtons';

import { Container, Grid, GridItem } from './styled';

export const GameListGrid = (props: App.Props.GameListPosition) => {
  const { gameList, gameIndex, onChangeGame, onStartGame } = props;
  const onPressed = useGamepad();
  const lineWidth = useMemo(() => Math.round(gameList.length / 2), [gameList]);

  useEffect(() => {
    onPressed('ArrowLeft', () => onChangeGame(gameIndex - 1));
    onPressed('ArrowRight', () => onChangeGame(gameIndex + 1));
    onPressed('ArrowUp', () => onChangeGame(gameIndex - lineWidth));
    onPressed('ArrowDown', () => onChangeGame(gameIndex + lineWidth));
    // onPressed('ButtonStart', () => onStartGame(gameIndex));
  }, [onPressed]);

  const gridItems = useMemo(() => {
    return gameList.map(game => (
      <GridItem className="grid-items" key={game.name} src={game.cover} focus={gameIndex} />
    ));
  }, [gameIndex, gameList]);

  return (
    <Container>
      <Grid lineWidth={lineWidth}>{gridItems}</Grid>
      <GamepadButtons buttons={UIButtons.GameListGrid} />
    </Container>
  );
};
