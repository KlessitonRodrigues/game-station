import { Route, Routes } from 'react-router-dom';
import useGlobalContext from 'src/hooks/useGlobalContext';
import usePath from 'src/hooks/usePath';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { bgGradientList } from 'src/utils/constants/gradient';
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <TabHeader />
      <Routes location={{ pathname: '/' + path, hash: '', search: '' }}>
        <Route path="games/list/bar" element={<GamesPage />} />
        <Route path="games/list/grid" element={<GamesPage />} />
        <Route path="games/add" element={<GamesPage />} />
        <Route path="apps" element={<GamesPage />} />
        <Route path="music" element={<GamesPage />} />
        <Route path="midia" element={<GamesPage />} />
        <Route path="web" element={<GamesPage />} />
        <Route path="theme" element={<ThemePage />} />
        <Route path="controls" element={<ControlsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
      <DynamicBg
        gradient={bgGradientList[global.gradientBg]}
        img={global.imgBg}
        zIndex={-2}
        blur={!path.includes('games/list')}
      />
    </ThemeProvider>
  );
};

export default Router;
