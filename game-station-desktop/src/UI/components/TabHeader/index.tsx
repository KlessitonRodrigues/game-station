import {
  Container,
  LeftButtons,
  MiddleTabs,
  RightButtons,
  TabsItem,
  TabsItemLabel,
} from "./styled";
import { useEffect, useState } from "react";
import Icons from "src/UI/base/Icons";
import useNavigationContext from "src/hooks/useNavigationContext";

const TabHeader = () => {
  const [nav, setNav] = useNavigationContext();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setNav({
      ...nav,
      buttonMap: {
        ...nav.buttonMap,
        ButtonLeft: () => setSelected(selected - 1),
        ButtonRight: () => setSelected(selected + 1),
      },
    });
  }, [selected]);

  return (
    <Container>
      <LeftButtons>Left</LeftButtons>
      <MiddleTabs>
        <TabsItem selected={selected === 0}>
          <Icons type="games" size={10} />
          <TabsItemLabel>Games</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 1}>
          <Icons type="apps" size={10} />
          <TabsItemLabel>Apps</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 2}>
          <Icons type="music" size={10} />
          <TabsItemLabel>Music</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 3}>
          <Icons type="news" size={10} />
          <TabsItemLabel>News</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 4}>
          <Icons type="theme" size={10} />
          <TabsItemLabel>Theme</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 5}>
          <Icons type="settings" size={10} />
          <TabsItemLabel>Settings</TabsItemLabel>
        </TabsItem>
      </MiddleTabs>
      <RightButtons>Right</RightButtons>
    </Container>
  );
};

export default TabHeader;
