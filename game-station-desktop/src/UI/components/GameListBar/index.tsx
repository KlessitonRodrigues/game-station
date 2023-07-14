import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { Container, Cover, CoverList, Description, GameList, Label, Title } from './styled';

const games = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const GameListBar = () => {
  const [pressed] = useGamepad();
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    console.log(pressed);
    if (pressed.includes('ArrowLeft')) selected > 0 && setSelected(selected - 1);
    if (pressed.includes('ArrowRight')) setSelected(selected + 1);
  }, [pressed]);

  return (
    <Container>
      <GameList>
        <Description>
          <Title>Forza Horizon 5</Title>
          <Label>Playground Games</Label>
        </Description>
        <CoverList>
          {games.slice(selected, -1).map(game => (
            <Cover key={game} first={game === selected}>
              {game}
            </Cover>
          ))}
        </CoverList>
      </GameList>
    </Container>
  );
};

export default GameListBar;
