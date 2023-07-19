import { useEffect, useState } from 'react';
import { dbClient } from 'src/config/db';
import useGamepad from 'src/hooks/useGamepad';

import DynamicBg from '../DynamicBg';
import {
  Column,
  Container,
  Cover,
  CoverList,
  CoverListItem,
  Description,
  GameInfo,
  GameListBar,
  GameTitle,
} from './styled';

const games = dbClient.games.read();

const GameList = () => {
  const [pressed] = useGamepad();
  const [selected, setSelected] = useState(0);
  const currentGame = games[selected];

  useEffect(() => {
    if (pressed.includes('ArrowLeft')) selected > 0 && setSelected(selected - 1);
    if (pressed.includes('ArrowRight')) selected < games.length - 1 && setSelected(selected + 1);
  }, [pressed]);

  return (
    <Container>
      <GameListBar>
        <Cover img={currentGame.cover}>{currentGame.name}</Cover>
        <Column>
          <Description>
            <GameTitle>{currentGame.name}</GameTitle>
            <GameInfo>{currentGame.publisher}</GameInfo>
          </Description>
          <CoverList>
            {games.map(game => (
              <CoverListItem img={game.cover} key={game.name} selected={selected}>
                {game.name}
              </CoverListItem>
            ))}
          </CoverList>
        </Column>
      </GameListBar>
      <DynamicBg img={currentGame.background} zIndex={-1} />
    </Container>
  );
};

export default GameList;
