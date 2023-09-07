import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const tabPath = ['games', 'apps', 'music', 'midia', 'web', 'theme', 'controls', 'settings'];

const TabHeader = () => {
  const onPressed = useGamepad();
  const [path, setPath] = usePath();
  const [active, setActive] = useState(0);

  useEffect(() => {
    onPressed('ButtonLeft', () => active > 0 && setActive(active - 1));
    onPressed('ButtonRight', () => active < tabPath.length - 1 && setActive(active + 1));
  }, [onPressed]);

  useEffect(() => setPath({ path: ['home', tabPath[active]] }), [active]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>
        {tabPath.map((tab, i) => (
          <TabsItem selected={active === i}>
            <Icons type={tab as App.Props.Icons['type']} size={13} />
            <TabsItemLabel>{tab}</TabsItemLabel>
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
