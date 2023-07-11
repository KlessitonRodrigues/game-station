import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { initialNavState } from './state';

const globalContext = createContext<NavigationContext>([initialNavState, () => {}]);

export const NavigationProvider = (props: PropsWithChildren) => (
  <globalContext.Provider value={useState(initialNavState)}>
    {props.children}
  </globalContext.Provider>
);

export const updateButtons = (nav: NavigationState, buttonMap: NavigationState['buttonMap']) => {
  console.log(nav.buttonMap, buttonMap);

  return {
    ...nav,
    buttonMap: {
      ...nav.buttonMap,
      ...buttonMap,
    },
  };
};

export default () => useContext(globalContext);
