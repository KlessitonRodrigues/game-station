import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import useGamepad from 'src/hooks/useGamepad';
import { UIButtons } from 'src/utils/constants/UIButtons';

import { renderGridItems } from './renderGrid';
import { Container, Grid } from './styled';

export const GameListGrid = (props: App.Props.GameListScreen) => {
  const { active, list, index, onChangeGame, onActiveGame } = props;
  const onPress = useGamepad();

  useEffect(() => {
    const pos = (index + 1) % 4;
    onPress('ArrowLeft', () => pos !== 1 && onChangeGame(index - 1));
    onPress('ArrowRight', () => pos !== 0 && onChangeGame(index + 1));
    onPress('ArrowUp', () => onChangeGame(index - 4));
    onPress('ArrowDown', () => onChangeGame(index + 4));
    onPress('ButtonA', () => onActiveGame(index));
    // onPress('ButtonStart', () => onStartGame(gameIndex));
  }, [onPress]);

  const GridItems = useMemo(() => renderGridItems(props), [active, index, list]);

  return (
    <Container>
      <Grid>{GridItems}</Grid>
      <GamepadButtons buttons={[]} />
    </Container>
  );
};
