import { useEffect, useState } from 'react';
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

const games = [
  {
    name: 'Forza Horizon 4',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://criticalhits.com.br/wp-content/uploads/2018/09/forza-horizon-4-cover.jpg',
  },
  {
    name: 'The elder scrolls V: Skyrim',
    publisher: 'Bathesda',
    bg: 'https://getwallpapers.com/wallpaper/full/7/3/f/62923.jpg',
    cove: 'https://th.bing.com/th/id/R.b78d05f2dabd5758d9e777e0f22105fb?rik=lEzrCiTm88AZBg&pid=ImgRaw&r=0',
  },
  {
    name: 'Follout 4',
    publisher: 'Bathesda',
    bg: 'https://images.alphacoders.com/669/669271.jpg',
    cove: 'https://th.bing.com/th/id/OIP.5mnxlc8QM1umk9YuQa5_egHaLH?pid=ImgDet&rs=1',
  },
  {
    name: 'Follout New Vagas',
    publisher: 'Bathesda',
    bg: 'https://images5.alphacoders.com/421/thumb-1920-421263.jpg',
    cove: 'https://cdn1.epicgames.com/offer/3428aaab2c674c98b3acb789dcfaa548/EGS_FalloutNewVegas_ObsidianEntertainment_S2_1200x1600-866fe8b8f56e2e7bb862c49bf0627b9a',
  },
];

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
        <Cover img={currentGame.cove}>{currentGame.name}</Cover>
        <Column>
          <Description>
            <GameTitle>{currentGame.name}</GameTitle>
            <GameInfo>{currentGame.publisher}</GameInfo>
          </Description>
          <CoverList>
            {games.map(game => (
              <CoverListItem img={game.cove} key={game.name} selected={selected}>
                {game.name}
              </CoverListItem>
            ))}
          </CoverList>
        </Column>
      </GameListBar>
      <DynamicBg img={currentGame.bg} zIndex={-1} />
    </Container>
  );
};

export default GameList;
