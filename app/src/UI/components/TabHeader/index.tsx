import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

import { tabRoutes } from './services/tabs';
import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const TabHeader = () => {
  const onPressed = useGamepad();
  const [path, setPath] = usePath();
  const [active, setActive] = useState(0);

  useEffect(() => {
    onPressed('ButtonLeft', () => active > 0 && setActive(active - 1));
    onPressed('ButtonRight', () => active < tabRoutes.length - 1 && setActive(active + 1));
  }, [onPressed]);

  useEffect(() => {
    const route = tabRoutes[active].route as App.Hooks.PathState;
    setPath(route);
  }, [active]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>
        {tabRoutes.map((tab, i) => (
          <TabsItem selected={active === i}>
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
