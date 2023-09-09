import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { onConnected, onDisconnected } from './services/gamepad';

const globalContext = createContext<App.Hooks.GamepadContext>(() => {});

export const GamepadProvider = (props: PropsWithChildren) => {
  const [pressed, setPressed] = useState<string[]>([]);

  const onPressed: App.Gamepad.OnPressed = (button, cb) => {
    if (pressed.length === 1 && pressed.includes(button)) cb && cb();
  };

  const onPressedHook = useCallback(onPressed, [pressed]);

  useEffect(() => {
    window.addEventListener('gamepadconnected', ev => onConnected(ev, setPressed));
    window.addEventListener('gamepaddisconnected', onDisconnected);
  }, []);

  return <globalContext.Provider value={onPressedHook}>{props.children}</globalContext.Provider>;
};

export default () => useContext(globalContext);
