import { useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import If from 'src/UI/base/If';

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

export const GameListBar = (props: App.Props.GameListScreen) => {
  const { list, game, index, onChangeGame, onStartGame } = props;

  const CoverListItems = useMemo(() => {
    return list.map(({ name, cover }) => (
      <CoverListImg className="cove-item" key={name} focus={index} src={cover} />
    ));
  }, []);

  return (
    <Container>
      <If check={!!list.length}>
        <Games>
          <CoverImg src={game?.cover} />
          <Column>
            <Description>
              <GameTitle>{game?.name}</GameTitle>
              <GameInfo>{game?.publisher}</GameInfo>
            </Description>
            <CoverList>{CoverListItems}</CoverList>
          </Column>
        </Games>
      </If>

      <GamepadButtons
        buttons={[
          {
            label: 'Start',
            button: 'ButtonA',
            onPress: () => onStartGame(index),
          },
          {
            button: 'ArrowRight',
            onPress: () => index < list.length - 1 && onChangeGame(index + 1),
          },
          {
            button: 'ArrowLeft',
            onPress: () => index && onChangeGame(index - 1),
          },
          {
            label: 'Add Game',
            button: 'ButtonY',
            onPress: () => {},
          },
        ]}
      />
    </Container>
  );
};
