import { useEffect, useMemo } from 'react';
import GamepadButtons from 'src/UI/base/GamepadButtons';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';
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
  const [global, setGlobal] = useGlobalContext();
  const onPressed = useGamepad();
  const { focus, setUI } = useUIState();
  const games = useMemo(() => dbClient.games.read(), []);
  const currentGame = useMemo(() => games[focus], [focus]);

  useEffect(() => {
    onPressed('ArrowLeft', () => setUI('focus', focus - 1));
    onPressed('ArrowRight', () => focus < games.length - 1 && setUI('focus', focus + 1));
    onPressed('ButtonStart', () => {
      nodeJS.exec(`cd ${currentGame.gamePath} && ./${currentGame.gameFile}`);
    });
  }, [onPressed]);

  useEffect(() => {
    setGlobal({ ...global, imgBg: currentGame.background });
  }, [currentGame.background]);

  return (
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
      <GamepadButtons
        buttons={[
          { type: 'rounded', content: 'A', label: 'Details' },
          { type: 'rounded', content: 'Y', label: 'Add Game' },
          { type: 'rounded', content: 'V', label: 'Grid View' },
        ]}
      />
    </Container>
  );
};
