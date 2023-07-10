import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "src/UI/routes";
import { GlobalProvider } from "src/hooks/useGlobalContext";
import { LanguageProvider } from "src/hooks/useLangContext";
import { NavigationProvider } from "src/hooks/useNavigationContext";

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
        <NavigationProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </NavigationProvider>
      </LanguageProvider>
    </GlobalProvider>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
