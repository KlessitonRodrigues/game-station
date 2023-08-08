import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext';
import usePath from 'src/hooks/usePath';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import DynamicBg from '../base/DynamicBg';
import TabHeader from '../components/TabHeader';
import ControlsPage from '../pages/ControlsPage';
import GamesPage from '../pages/GamesPage';
import SettingsPage from '../pages/SettingsPage';
import ThemePage from '../pages/ThemePage';

const Router = () => {
  const [path] = usePath();
  const [global] = useGlobalContext();
  const pathname = `/${path.path.join('/')}`;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <TabHeader />
      <Routes location={{ pathname, hash: '', search: '' }}>
        <Route path="home/games" element={<GamesPage />} />
        <Route path="home/apps" element={<GamesPage />} />
        <Route path="home/music" element={<GamesPage />} />
        <Route path="home/midia" element={<GamesPage />} />
        <Route path="home/web" element={<GamesPage />} />
        <Route path="home/theme" element={<ThemePage />} />
        <Route path="home/controls" element={<ControlsPage />} />
        <Route path="home/settings" element={<SettingsPage />} />
      </Routes>
      <DynamicBg gradient={global.gradientBg} zIndex={-2} />
    </ThemeProvider>
  );
};

export default Router;
