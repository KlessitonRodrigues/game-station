import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { initialThemeState } from './state';

const globalContext = createContext<ThemeTypeContext>([initialThemeState, () => {}]);

export const ThemeTypeProvider = (props: PropsWithChildren) => (
  <globalContext.Provider value={useState(initialThemeState)}>
    {props.children}
  </globalContext.Provider>
);

export default () => useContext(globalContext);
