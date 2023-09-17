import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/routes';
import { GlobalProvider } from 'src/hooks/useGlobalContext';
import { StyleSheetManager } from 'styled-components';

import { PathProvider } from './hooks/usePath';

const App = () => {
  return (
    <GlobalProvider>
      <PathProvider>
        <StyleSheetManager>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StyleSheetManager>
      </PathProvider>
    </GlobalProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
