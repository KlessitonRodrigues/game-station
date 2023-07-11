import { PropsWithChildren, createContext, useContext, useState } from 'react';

const initialPath: PathState = { address: '/home' };
const pathContext = createContext<PathContext>([initialPath, () => {}]);

export const RouteProvider = (props: PropsWithChildren) => (
  <pathContext.Provider value={useState(initialPath)}>{props.children}</pathContext.Provider>
);

export default () => useContext(pathContext);
