import { useEffect } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import useRoutesContext from 'src/hooks/useRoutesContext';
import useScreenState from 'src/hooks/useScreenState';

import { tabRoutes } from './services/tabs';
import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const TabHeader = () => {
  const onPress = useGamepad();
  const routes = useRoutesContext();
  const screen = useScreenState();

  useEffect(() => {
    onPress('ButtonLeft', () => screen.setOption(screen.option - 1));
    onPress('ButtonRight', () => {
      screen.option < tabRoutes.length - 1 && screen.setOption(screen.option + 1);
    });
  }, [onPress]);

  useEffect(() => {
    routes.setPath(tabRoutes[screen.option].route);
  }, [screen.option]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>
        {tabRoutes.map((tab, i) => (
          <TabsItem
            key={tab.name}
            selected={screen.option === i}
            onClick={() => screen.setOption(i)}
          >
            <Icons type={tab.name as App.Props.Icons['type']} size={13} />
            <TabsItemLabel>{tab.name}</TabsItemLabel>
          </TabsItem>
        ))}
      </MiddleTabs>

      <RightIcons>
        <Icons type="gamepad" size={7} />
      </RightIcons>
    </Container>
  );
};

export default TabHeader;
