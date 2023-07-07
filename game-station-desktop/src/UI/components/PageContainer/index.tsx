import GamepadPanel from "../Gamepad";
import { Container, Content } from "./styled";
import { PropsWithChildren } from "react";
import useThemeTypeContext from "src/hooks/useThemeTypeContext";
import GlobalCSS from "src/styles/globalCSS";
import { defaultTheme, defaultThemeDark } from "src/styles/theme";
import { ThemeProvider } from "styled-components";

const PageContainer = (props: PropsWithChildren) => {
  const [themeType] = useThemeTypeContext();
  const theme = themeType.darkTheme ? defaultThemeDark : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Container>
        <Content>{props.children}</Content>
      </Container>
      <GamepadPanel />
    </ThemeProvider>
  );
};

export default PageContainer;
