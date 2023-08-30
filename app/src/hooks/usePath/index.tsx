import { PropsWithChildren, createContext, useContext, useState } from 'react';

const initialPath: App.Hooks.PathState = { path: ['home', 'games'] };
const pathContext = createContext<App.Hooks.PathContext>([initialPath, () => {}]);

export const PathProvider = (props: PropsWithChildren) => (
  <pathContext.Provider value={useState(initialPath)}>{props.children}</pathContext.Provider>
);

export default () => useContext(pathContext);
