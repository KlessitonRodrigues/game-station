import Icons from 'src/UI/base/Icons';

import { TabsItem, TabsItemLabel } from '../styled';
import { tabRoutes } from './tabs';

export const RenderTabs = (screen: App.Hooks.UseScreenState) => {
  return (
    <>
      {tabRoutes.map((tab, i) => (
        <TabsItem key={tab.name} selected={screen.option === i} onClick={() => screen.setOption(i)}>
          <Icons type={tab.name as App.Props.Icons['type']} size={13} />
          <TabsItemLabel>{tab.name}</TabsItemLabel>
        </TabsItem>
      ))}
    </>
  );
};
