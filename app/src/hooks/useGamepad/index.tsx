import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { onConnected, onDisconnected } from './services/gamepad';

const globalContext = createContext<GamepadContext>([[], () => {}]);

export const GamepadProvider = (props: PropsWithChildren) => {
  const state = useState([]);
  const [pressed, setPressed] = state;

  useEffect(() => {
    window.addEventListener('gamepadconnected', ev => onConnected(ev, setPressed));
    window.addEventListener('gamepaddisconnected', onDisconnected);
  }, []);

  return <globalContext.Provider value={state}>{props.children}</globalContext.Provider>;
};

export default () => useContext(globalContext);
