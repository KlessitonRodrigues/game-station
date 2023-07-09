import HomePage from "./UI/pages/Home";
import { LanguageProvider } from "./hooks/useLangContext";
import { NavigationProvider } from "./hooks/useNavigationContext";
import { ThemeTypeProvider } from "./hooks/useThemeTypeContext";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "src/hooks/useGlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
        <ThemeTypeProvider>
          <NavigationProvider>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </NavigationProvider>
        </ThemeTypeProvider>
      </LanguageProvider>
    </GlobalProvider>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
