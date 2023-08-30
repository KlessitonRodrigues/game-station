import { useEffect, useMemo, useState } from 'react';
import SlideUp from 'src/UI/base/Animations/SlideUp';
import DynamicBg from 'src/UI/base/DynamicBg';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';
import { nodeJS } from 'src/utils/nodeJS';

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
  const [pressed] = useGamepad();
  const [selected, setSelected] = useState(0);
  const games = useMemo(() => dbClient.games.read(), []);
  const currentGame = games[selected];

  useEffect(() => {
    if (pressed.includes('ArrowLeft')) selected > 0 && setSelected(selected - 1);
    if (pressed.includes('ArrowRight')) selected < games.length - 1 && setSelected(selected + 1);
    if (pressed.includes('ButtonStart'))
      nodeJS.exec(`cd ${currentGame.gamePath} && ./${currentGame.gameFile}`);
  }, [pressed]);

  return (
    <>
      <SlideUp>
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
                  <CoverListItem key={game.name} img={game.cover} selected={selected}>
                    {game.name}
                  </CoverListItem>
                ))}
              </CoverList>
            </Column>
          </Games>
        </Container>
      </SlideUp>
      <DynamicBg img={currentGame?.background} zIndex={-1} />
    </>
  );
};
