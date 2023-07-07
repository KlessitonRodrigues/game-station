import { langSwitch } from "./services/langSwitch";
import { Container, LangSwitch, Left, Right, Title } from "./styled";
import Icons from "src/UI/base/Icons";
import useLangContext from "src/hooks/useLangContext";
import useThemeTypeContext from "src/hooks/useThemeTypeContext";

const Header = () => {
  const [themeType, setThemeType] = useThemeTypeContext();
  const [lang, setLang] = useLangContext();

  return (
    <Container>
      <Left>
        <Title>Game Station</Title>
      </Left>
      <Right>
        <LangSwitch onClick={() => setLang(langSwitch(lang))}>
          {lang.type}
        </LangSwitch>
        <Icons
          size={7}
          type={themeType.darkTheme ? "moon-fill" : "moon"}
          onPress={() =>
            setThemeType({ ...themeType, darkTheme: !themeType.darkTheme })
          }
        />
      </Right>
    </Container>
  );
};

export default Header;
