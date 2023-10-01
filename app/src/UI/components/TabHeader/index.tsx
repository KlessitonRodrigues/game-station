import { useEffect } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';
import useUIState from 'src/hooks/useUIState';

import { tabRoutes } from './services/tabs';
import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const TabHeader = () => {
  const onPress = useGamepad();
  const [path, setPath] = usePath();
  const { option, setUI } = useUIState();

  useEffect(() => {
    onPress('ButtonLeft', () => setUI('option', option - 1));
    onPress('ButtonRight', () => option < tabRoutes.length - 1 && setUI('option', option + 1));
  }, [onPress]);

  useEffect(() => {
    const route = tabRoutes[option].route as App.Hooks.PathState;
    setPath(route);
  }, [option]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>
        {tabRoutes.map((tab, i) => (
          <TabsItem key={tab.name} selected={option === i} onClick={() => setUI('option', i)}>
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
