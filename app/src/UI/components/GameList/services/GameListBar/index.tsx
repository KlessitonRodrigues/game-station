import { useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';

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

const getCoverList = (props: App.Props.GameListScreen) => {
  const { list, index } = props;
  return list.map(game => (
    <CoverListImg className="cove-item" key={game.name} focus={index} src={game.cover} />
  ));
};

export const GameListBar = (props: App.Props.GameListScreen) => {
  const { list, game, index, onChangeGame } = props;
  const CoverListItems = useMemo(() => getCoverList(props), [list.length, index]);

  return (
    <Container>
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
      <GamepadButtons
        buttons={[
          { label: 'Start', gamepadBtn: 'ButtonA', onPressedFn: () => {} },
          {
            label: 'Arrow Left',
            gamepadBtn: 'ArrowLeft',
            onPressedFn: () => index && onChangeGame(index - 1),
          },
          {
            label: 'Arrow Right',
            gamepadBtn: 'ArrowRight',
            onPressedFn: () => index < list.length - 1 && onChangeGame(index + 1),
          },
          { label: 'Add Game', gamepadBtn: 'ButtonA', onPressedFn: () => {} },
        ]}
      />
    </Container>
  );
};
