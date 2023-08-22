import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';
import usePath from 'src/hooks/usePath';

import { Container, LeftIcons, MiddleTabs, RightIcons, TabsItem, TabsItemLabel } from './styled';

const tabPath = ['games', 'apps', 'music', 'midia', 'web', 'theme', 'controls', 'settings'];

const TabHeader = () => {
  const [pressed] = useGamepad();
  const [path, setPath] = usePath();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (pressed.length === 1) {
      if (pressed.includes('ButtonLeft') && selected > 0) {
        setSelected(selected - 1);
      }
      if (pressed.includes('ButtonRight') && selected < tabPath.length - 1) {
        setSelected(selected + 1);
      }
    }
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
        {tabPath.map((tab, i) => (
          <TabsItem selected={selected === i}>
            <Icons type={tab as IconsProps['type']} size={13} />
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
