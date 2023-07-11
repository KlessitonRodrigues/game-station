import { Route, Routes } from 'react-router-dom';
import useNavigationContext from 'src/hooks/useNavigationContext';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import GamepadPanel from '../components/Gamepad';
import TabHeader from '../components/TabHeader';
import GameListPage from '../pages/GameListPage';
import ThemePage from '../pages/ThemePage';

const Router = () => {
  const [nav] = useNavigationContext();
  const pathname = `/${nav.path.join('/')}`;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <TabHeader />
      <Routes location={{ pathname, hash: '', search: '' }}>
        <Route path="home/gamelist" element={<GameListPage />} />
        <Route path="home/apps" element={<GameListPage />} />
        <Route path="home/music" element={<GameListPage />} />
        <Route path="home/midia" element={<GameListPage />} />
        <Route path="home/web" element={<GameListPage />} />
        <Route path="home/settings" element={<GameListPage />} />
        <Route path="home/theme" element={<ThemePage />} />
      </Routes>
      <GamepadPanel />
    </ThemeProvider>
  );
};

export default Router;
