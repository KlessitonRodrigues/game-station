import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/routes';
import { GamepadProvider } from 'src/hooks/useGamepad';
import { GlobalProvider } from 'src/hooks/useGlobalContext';

import { PathProvider } from './hooks/usePath';

const App = () => {
  return (
    <GlobalProvider>
      <PathProvider>
        <GamepadProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GamepadProvider>
      </PathProvider>
    </GlobalProvider>
  );
};

reactDOM.render(<App />, document.getElementById('root'));
