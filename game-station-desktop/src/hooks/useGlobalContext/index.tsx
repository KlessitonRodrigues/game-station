import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { initialGlobalState } from './state';

const globalContext = createContext<GlobalContext>([initialGlobalState, () => {}]);

export const GlobalProvider = (props: PropsWithChildren) => (
  <globalContext.Provider value={useState(initialGlobalState)}>
    {props.children}
  </globalContext.Provider>
);

export default () => useContext(globalContext);
