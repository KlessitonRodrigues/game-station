import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import Icons from 'src/UI/base/Icons';
import If from 'src/UI/base/If';
import useGamepad from 'src/hooks/useGamepad';
import { UIButtons } from 'src/utils/constants/UIButtons';

import {
  Container,
  Content,
  Description,
  Grid,
  GridItem,
  GridItemImg,
  Label,
  StartButton,
  Title,
} from './styled';

const renderGridItems = (props: App.Props.GameListView) => {
  const { active, gameList, gameIndex, onChangeGame, onActiveGame } = props;

  return gameList.map((game, i) => (
    <GridItem
      key={game.name}
      focus={gameIndex === i}
      onClick={() => (i === gameIndex ? onActiveGame(i) : onChangeGame(i))}
      ref={ref => ref && gameIndex === i && ref.scrollIntoView({ block: 'center' })}
    >
      <GridItemImg src={game.cover} />
      <If check={active && gameIndex === i}>
        <Description>
          <Content>
            <Title>{game.name}</Title>
            <Label>{game.publisher}</Label>
          </Content>
          <StartButton>Start</StartButton>
        </Description>
      </If>
    </GridItem>
  ));
};

export const GameListGrid = (props: App.Props.GameListView) => {
  const { active, gameList, gameIndex, onChangeGame, onActiveGame } = props;
  const onPress = useGamepad();

  useEffect(() => {
    const pos = (gameIndex + 1) % 4;
    onPress('ArrowLeft', () => pos !== 1 && onChangeGame(gameIndex - 1));
    onPress('ArrowRight', () => pos !== 0 && onChangeGame(gameIndex + 1));
    onPress('ArrowUp', () => onChangeGame(gameIndex - 4));
    onPress('ArrowDown', () => onChangeGame(gameIndex + 4));
    onPress('ButtonA', () => onActiveGame(gameIndex));
    // onPress('ButtonStart', () => onStartGame(gameIndex));
  }, [onPress]);

  const GridItems = useMemo(() => renderGridItems(props), [active, gameIndex, gameList]);

  return (
    <Container>
      <Grid>{GridItems}</Grid>
      <GamepadButtons buttons={UIButtons.GameListGrid} />
    </Container>
  );
};
