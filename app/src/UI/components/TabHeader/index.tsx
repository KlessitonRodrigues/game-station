import { useEffect, useMemo } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import useRoutesContext from 'src/hooks/useRoutesContext';
import useScreenState from 'src/hooks/useScreenState';

import { RenderTabs } from './services/renderTabs';
import { tabRoutes } from './services/tabs';
import { Container, LeftIcons, MiddleTabs, RightIcons } from './styled';

const TabHeader = () => {
  const onPress = useGamepad();
  const routes = useRoutesContext();
  const screen = useScreenState();
  const { option, setOption } = screen;

  useEffect(() => {
    const tabs = tabRoutes.length;
    onPress('ButtonLeft', () => option && setOption(option - 1));
    onPress('ButtonRight', () => option < tabs - 1 && setOption(option + 1));
  }, [onPress]);

  useEffect(() => {
    const route = tabRoutes[option].route as App.Utils.Paths;
    routes.setPath(route);
  }, [option]);

  const Tabs = useMemo(() => RenderTabs(screen), [screen]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>{Tabs}</MiddleTabs>

      <RightIcons>
        <Icons type="gamepad" size={7} />
      </RightIcons>
    </Container>
  );
};

export default TabHeader;
