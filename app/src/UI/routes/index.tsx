import { Route, Routes } from 'react-router-dom';
import DynamicBg from 'src/UI/base/DynamicBg';
import { GamepadProvider } from 'src/hooks/useGamepad';
import useGlobalContext from 'src/hooks/useGlobalContext';
import usePath from 'src/hooks/usePath';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme } from 'src/styles/theme';
import { bgGradientList } from 'src/utils/constants/gradient';
import { ThemeProvider } from 'styled-components';

import TabHeader from '../components/TabHeader';
import ControlsPage from '../pages/Controls';
import GamesPage from '../pages/Games';
import SettingsPage from '../pages/Settings';
import ThemePage from '../pages/Theme';

const Router = () => {
  const [path] = usePath();
  const [global] = useGlobalContext();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <GamepadProvider>
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
      </GamepadProvider>
      <DynamicBg
        gradient={bgGradientList[global.gradientBg]}
        img={global.imgBg}
        layer={-2}
        blurBg={!path.includes('games/list/bar')}
      />
    </ThemeProvider>
  );
};

export default Router;
