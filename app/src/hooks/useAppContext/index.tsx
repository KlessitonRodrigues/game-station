import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<App.Hooks.UseAppContext>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [firstRun, setFirstRun] = useState(true);
  const [bgImage, setBgImage] = useState('');
  const [bgColor, setBgColor] = useState<App.Utils.BgColors>('blueAndPink');

  const context: App.Hooks.UseAppContext = {
    firstRun,
    bgImage,
    bgColor,
    setFirstRun,
    setBgImage,
    setBgColor,
  };

  const value = useMemo(() => context, [firstRun, bgImage, bgColor]);

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
