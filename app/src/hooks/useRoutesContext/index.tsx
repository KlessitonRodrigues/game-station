import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<App.Hooks.UseRoutesContext>(null);

export const RoutesProvider = (props: PropsWithChildren) => {
  const [path, setPath] = useState<App.Utils.Paths>('games/list/bar');
  const [lang, setLang] = useState('');

  const context: App.Hooks.UseRoutesContext = {
    path,
    lang,
    setPath,
    setLang,
  };

  const value = useMemo(() => context, [path, lang]);

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
