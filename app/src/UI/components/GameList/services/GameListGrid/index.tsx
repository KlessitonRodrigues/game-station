import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import Icons from 'src/UI/base/Icons';
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
      active={active}
      ref={ref => ref && gameIndex === i && ref.scrollIntoView()}
      key={game.name}
      focus={gameIndex === i}
      onClick={() => {
        if (i === gameIndex) onActiveGame(i);
        else onChangeGame(i);
      }}
    >
      <GridItemImg src={game.cover} />
      <Description>
        <Content>
          <Title>{game.name}</Title>
          <Label>{game.publisher}</Label>
        </Content>
        <StartButton>
          <Icons type="games" />
          Start
        </StartButton>
      </Description>
    </GridItem>
  ));
};

export const GameListGrid = (props: App.Props.GameListView) => {
  const { active, gameList, gameIndex, onChangeGame, onActiveGame, onStartGame } = props;
  const onPressed = useGamepad();

  useEffect(() => {
    const pos = (gameIndex + 1) % 4;
    onPressed('ArrowLeft', () => pos !== 1 && onChangeGame(gameIndex - 1));
    onPressed('ArrowRight', () => pos !== 0 && onChangeGame(gameIndex + 1));
    onPressed('ArrowUp', () => onChangeGame(gameIndex - 4));
    onPressed('ArrowDown', () => onChangeGame(gameIndex + 4));
    onPressed('ButtonA', () => onActiveGame(gameIndex));
    // onPressed('ButtonStart', () => onStartGame(gameIndex));
  }, [onPressed]);

  const GridItems = useMemo(() => renderGridItems(props), [active, gameIndex, gameList]);

  return (
    <Container>
      <Grid>{GridItems}</Grid>
      <GamepadButtons buttons={UIButtons.GameListGrid} />
    </Container>
  );
};
