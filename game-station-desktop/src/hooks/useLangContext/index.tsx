import { initialLangState } from "./state";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const PathContext = createContext<LangContext>([initialLangState, () => {}]);

export const LanguageProvider = (props: PropsWithChildren) => (
  <PathContext.Provider value={useState(initialLangState)}>
    {props.children}
  </PathContext.Provider>
);

export default () => useContext(PathContext);
