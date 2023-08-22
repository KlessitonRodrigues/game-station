import { PropsWithChildren, createContext, useContext, useState } from 'react';

const initialPath: SendDataState = null;
const pathContext = createContext<SendDataContext>([initialPath, () => {}]);

export const RouteProvider = (props: PropsWithChildren) => (
  <pathContext.Provider value={useState(initialPath)}>{props.children}</pathContext.Provider>
);

export default () => useContext(pathContext);
