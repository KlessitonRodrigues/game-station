import { PropsWithChildren, createContext, useContext, useState } from 'react';

const globalContext = createContext<GamepadContext>([[], () => {}]);

export const GamepadProvider = (props: PropsWithChildren) => {
  return <globalContext.Provider value={useState([])}>{props.children}</globalContext.Provider>;
};

export default () => useContext(globalContext);
