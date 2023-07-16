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
  GameList,
  GameTitle,
} from './styled';

const games = [
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
  {
    name: 'Forza Horizon 5',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
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
    bg: 'https://s1.best-wallpaper.net/wallpaper/m/1808/Fallout-4-helmet_m.webp',
    cove: 'https://th.bing.com/th/id/OIP.5mnxlc8QM1umk9YuQa5_egHaLH?pid=ImgDet&rs=1',
  },
  {
    name: 'Forza Horizon',
    publisher: 'Playground Games',
    bg: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cove: 'https://thumbnails.pcgamingwiki.com/1/13/Forza_Horizon_5_cover.jpg/600px-Forza_Horizon_5_cover.jpg',
  },
];

const GameListBar = () => {
  const [pressed] = useGamepad();
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    if (pressed.includes('ArrowLeft')) selected > 1 && setSelected(selected - 1);
    if (pressed.includes('ArrowRight')) setSelected(selected + 1);
  }, [pressed]);

  return (
    <Container>
      <GameList>
        <Cover src={games[selected - 1].cove}>{games[selected - 1].name}</Cover>
        <Column>
          <Description>
            <GameTitle>{games[selected - 1].name}</GameTitle>
            <GameInfo>{games[selected - 1].publisher}</GameInfo>
          </Description>
          <CoverList>
            {games.map(game => (
              <CoverListItem key={game.name} selected={selected}>
                {game.name}
              </CoverListItem>
            ))}
          </CoverList>
        </Column>
      </GameList>
      <DynamicBg img={games[selected - 1].bg} />
    </Container>
  );
};

export default GameListBar;
