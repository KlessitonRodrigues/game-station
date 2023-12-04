import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'src/UI/routes';
import { AppProvider } from 'src/hooks/useAppContext';
import { RoutesProvider } from 'src/hooks/useRoutesContext';
import { StyleSheetManager } from 'styled-components';

const App = () => {
  return (
    <AppProvider>
      <RoutesProvider>
        <StyleSheetManager>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StyleSheetManager>
      </RoutesProvider>
    </AppProvider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
