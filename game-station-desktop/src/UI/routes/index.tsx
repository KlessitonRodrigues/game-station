import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext';
import usePath from 'src/hooks/usePath';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import DynamicBg from '../components/DynamicBg';
import GamepadPanel from '../components/Gamepad';
import TabHeader from '../components/TabHeader';
import GameListPage from '../pages/GameListPage';
import ThemePage from '../pages/ThemePage';

const Router = () => {
  const [path] = usePath();
  const [global] = useGlobalContext();

  const pathname = `/${path.path.join('/')}`;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <GamepadPanel />
      <TabHeader />
      <Routes location={{ pathname, hash: '', search: '' }}>
        <Route path="home/gamelist" element={<GameListPage />} />
        <Route path="home/apps" element={<GameListPage />} />
        <Route path="home/music" element={<GameListPage />} />
        <Route path="home/midia" element={<GameListPage />} />
        <Route path="home/web" element={<GameListPage />} />
        <Route path="home/settings" element={<ThemePage />} />
      </Routes>
      <DynamicBg gradient={global.gradientBg} zIndex={-2} />
    </ThemeProvider>
  );
};

export default Router;
