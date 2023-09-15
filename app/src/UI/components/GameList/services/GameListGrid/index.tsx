import { useEffect, useMemo } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { Container } from './styled';

export const GameListGrid = (props: App.Props.GameList) => {
  const { gameList, gameIndex, onChangeGame, onStartGame } = props;

  const onPressed = useGamepad();
  const game = useMemo(() => gameList[gameIndex], [gameIndex, gameList]);

  useEffect(() => {
    // onPressed('ArrowLeft', () => onChangeGame(gameIndex - 1));
    // onPressed('ArrowRight', () => onChangeGame(gameIndex + 1));
    // onPressed('ButtonStart', () => onStartGame(gameIndex));
  }, [onPressed]);

  return <Container>Games</Container>;
};
