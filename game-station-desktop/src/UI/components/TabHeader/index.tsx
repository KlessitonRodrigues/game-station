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
          <Icons type="sun" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 1}>
          <Icons type="moon" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 2}>
          <Icons type="copy" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 3}>
          <Icons type="lock" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 4}>
          <Icons type="lock-open" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
        <TabsItem selected={selected === 5}>
          <Icons type="settings" />
          <TabsItemLabel>Sun</TabsItemLabel>
        </TabsItem>
      </MiddleTabs>
      <RightButtons>Right</RightButtons>
    </Container>
  );
};

export default TabHeader;
