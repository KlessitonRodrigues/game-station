import { PropsWithChildren, createContext, useContext, useState } from 'react';

const initialPath: App.Hooks.SendDataState = null;
const pathContext = createContext<App.Hooks.SendDataContext>([initialPath, () => {}]);

export const RouteProvider = (props: PropsWithChildren) => (
  <pathContext.Provider value={useState(initialPath)}>{props.children}</pathContext.Provider>
);

export default () => useContext(pathContext);
