import { useEffect, useMemo } from 'react';
import DynamicBg from 'src/UI/base/DynamicBg';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';
import { nodeJS } from 'src/utils/electron/nodeJS';

import {
  Column,
  Container,
  Cover,
  CoverList,
  CoverListItem,
  Description,
  GameInfo,
  GameTitle,
  Games,
} from './styled';

export const GameListBar = () => {
  const onPressed = useGamepad();
  const { focus, setUI } = useUIState();
  const games = useMemo(() => dbClient.games.read(), []);
  const currentGame = games[focus];

  useEffect(() => {
    onPressed('ArrowLeft', () => setUI('focus', focus - 1));
    onPressed('ArrowRight', () => focus < games.length - 1 && setUI('focus', focus + 1));
    onPressed('ButtonStart', () => {
      nodeJS.exec(`cd ${currentGame.gamePath} && ./${currentGame.gameFile}`);
    });
  }, [onPressed]);

  return (
    <>
      <Container>
        <Games>
          <Cover img={currentGame?.cover}>{currentGame?.name}</Cover>
          <Column>
            <Description>
              <GameTitle>{currentGame?.name}</GameTitle>
              <GameInfo>{currentGame?.publisher}</GameInfo>
            </Description>
            <CoverList>
              {games.map(game => (
                <CoverListItem key={game.name} img={game.cover} focus={focus}>
                  {game.name}
                </CoverListItem>
              ))}
            </CoverList>
          </Column>
        </Games>
      </Container>
      <DynamicBg img={currentGame?.background} zIndex={-1} />
    </>
  );
};
