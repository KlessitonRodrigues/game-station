import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/routes';
import { GamepadProvider } from 'src/hooks/useGamepad';
import { GlobalProvider } from 'src/hooks/useGlobalContext';

import { PathProvider } from './hooks/usePath';

const App = () => {
  return (
    <GlobalProvider>
      <PathProvider>
        <BrowserRouter>
          <GamepadProvider>
            <Router />
          </GamepadProvider>
        </BrowserRouter>
      </PathProvider>
    </GlobalProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
