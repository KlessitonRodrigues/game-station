import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import If from 'src/UI/base/If';
import useGamepad from 'src/hooks/useGamepad';
import { UIButtons } from 'src/utils/constants/UIButtons';

import {
  Column,
  Container,
  CoverImg,
  CoverList,
  CoverListImg,
  Description,
  GameInfo,
  GameTitle,
  Games,
} from './styled';

const renderListItems = (props: App.Props.GameListScreen) => {
  const { list, index } = props;
  return list.map(({ name, cover }) => (
    <CoverListImg className="cove-item" key={name} focus={index} src={cover} />
  ));
};

export const GameListBar = (props: App.Props.GameListScreen) => {
  const { list, game, index, onChangeGame, onStartGame } = props;
  const onPressed = useGamepad();
  const CoverListItems = useMemo(() => renderListItems(props), [list.length, index]);

  useEffect(() => {
    onPressed('ButtonA', () => onStartGame(game.path));
    onPressed('ArrowRight', () => index < list.length - 1 && onChangeGame(index + 1));
    onPressed('ArrowLeft', () => index && onChangeGame(index - 1));
    onPressed('ButtonY', () => onStartGame(game.path));
  }, [onPressed]);

  return (
    <Container>
      <If check={!!list.length}>
        <Games>
          <CoverImg src={game?.cover} />
          <Column>
            <Description>
              <GameTitle>{game?.name}</GameTitle>
              <GameInfo>{game?.publisher?.toLocaleLowerCase()}</GameInfo>
            </Description>
            <CoverList>{CoverListItems}</CoverList>
          </Column>
        </Games>
      </If>

      <GamepadButtons buttons={UIButtons.GameListBar} />
    </Container>
  );
};
