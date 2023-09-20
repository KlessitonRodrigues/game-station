import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
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

export const GameListBar = (props: App.Props.GameList) => {
  const { gameList, gameIndex, onChangeGame, onStartGame } = props;

  const onPressed = useGamepad();
  const game = useMemo(() => gameList[gameIndex], [gameIndex, gameList]);

  useEffect(() => {
    onPressed('ArrowLeft', () => onChangeGame(gameIndex - 1));
    onPressed('ArrowRight', () => onChangeGame(gameIndex + 1));
    onPressed('ButtonStart', () => onStartGame(gameIndex));
    // nodeJS.exec(`cd ${game.gamePath} && ./${game.gameFile}`);
  }, [onPressed]);

  return (
    <Container>
      <Games>
        <CoverImg src={game?.cover} />
        <Column>
          <Description>
            <GameTitle>{game?.name}</GameTitle>
            <GameInfo>{game?.publisher}</GameInfo>
          </Description>
          <CoverList>
            {gameList.map(game => (
              <CoverListImg
                className="cove-item"
                key={game.name}
                focus={gameIndex}
                src={game.cover}
              />
            ))}
          </CoverList>
        </Column>
      </Games>
      <GamepadButtons buttons={UIButtons.GameListBar} />
    </Container>
  );
};
