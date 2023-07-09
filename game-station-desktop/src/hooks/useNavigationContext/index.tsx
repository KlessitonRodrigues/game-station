import { initialNavState } from "./state";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const globalContext = createContext<NavigationContext>([
  initialNavState,
  () => {},
]);

export const NavigationProvider = (props: PropsWithChildren) => (
  <globalContext.Provider value={useState(initialNavState)}>
    {props.children}
  </globalContext.Provider>
);

export default () => useContext(globalContext);
