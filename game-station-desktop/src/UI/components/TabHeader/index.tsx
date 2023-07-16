import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const tabPath = ['gamelist', 'apps', 'music', 'midia', 'web', 'theme', 'settings'];

const TabHeader = () => {
  const [pressed] = useGamepad();
  const [path, setPath] = usePath();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (pressed.includes('ButtonLeft') && selected > 0) setSelected(selected - 1);
    if (pressed.includes('ButtonRight') && selected < 6) setSelected(selected + 1);
  }, [pressed]);

  useEffect(() => {
    setPath({ path: ['home', tabPath[selected]] });
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
        <Icons type="games" size={7} color="red" />
        <Icons type="battery" size={7} />
      </RightIcons>
    </Container>
  );
};

export default TabHeader;
