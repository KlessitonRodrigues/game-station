import { Route, Routes } from 'react-router-dom';
import DynamicBg from 'src/UI/base/DynamicBg';
import useAppContext from 'src/hooks/useAppContext';
import { GamepadProvider } from 'src/hooks/useGamepad';
import useRoutes from 'src/hooks/useRoutesContext';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import TabHeader from '../components/TabHeader';
import ControlsPage from '../pages/Controls';
import GamesPage from '../pages/Games';
import SettingsPage from '../pages/Settings';
import ThemePage from '../pages/Theme';

const Router = () => {
  const { path } = useRoutes();
  const { bgImage } = useAppContext();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <GamepadProvider>
        <TabHeader />
        <Routes location={{ pathname: '/' + path, hash: '', search: '' }}>
          <Route path="games/*" element={<GamesPage />} />
          <Route path="apps/*" element={<GamesPage />} />
          <Route path="music/*" element={<GamesPage />} />
          <Route path="midia/*" element={<GamesPage />} />
          <Route path="web/*" element={<GamesPage />} />
          <Route path="theme/*" element={<ThemePage />} />
          <Route path="controls/*" element={<ControlsPage />} />
          <Route path="settings/*" element={<SettingsPage />} />
        </Routes>
      </GamepadProvider>
      <DynamicBg img={bgImage} layer={-2} blur={!path.includes('games/list')} />
    </ThemeProvider>
  );
};

export default Router;
