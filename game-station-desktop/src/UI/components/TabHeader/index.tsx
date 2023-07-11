import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useNavigationContext from 'src/hooks/useNavigationContext';

import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const tabPath = ['gamelist', 'apps', 'music', 'midia', 'web', 'theme', 'settings'];

const TabHeader = () => {
  const [nav, setNav] = useNavigationContext();
  const [selected, setSelected] = useState(5);

  useEffect(() => {
    setNav({
      path: ['home', tabPath[selected]],
      buttonMap: {
        ...nav.buttonMap,
        ButtonLeft: () => selected > 0 && setSelected(selected - 1),
        ButtonRight: () => selected < 6 && setSelected(selected + 1),
      },
    });
  }, [selected]);

  return (
    <Container>
      <LeftIcons>
        <Icons type="user" size={7} />
      </LeftIcons>

      <MiddleTabs>
        <TabsItem selected={selected === 0}>
          <Icons type="games" size={12} />
          <TabsItemLabel>Games</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 1}>
          <Icons type="apps" size={12} />
          <TabsItemLabel>Apps</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 2}>
          <Icons type="music" size={12} />
          <TabsItemLabel>Music</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 3}>
          <Icons type="midia" size={12} />
          <TabsItemLabel>Midia</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 4}>
          <Icons type="web" size={12} />
          <TabsItemLabel>Web</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 5}>
          <Icons type="theme" size={12} />
          <TabsItemLabel>Theme</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 6}>
          <Icons type="settings" size={12} />
          <TabsItemLabel>Settings</TabsItemLabel>
        </TabsItem>
      </MiddleTabs>

      <RightIcons>
        <Icons type="battery" size={7} />
      </RightIcons>
    </Container>
  );
};

export default TabHeader;
