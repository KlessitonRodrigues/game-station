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

  const onPress: App.Gamepad.OnPressed = (button, cb) => pressed.includes(button) && cb && cb();
  const onPressHook = useCallback(onPress, [pressed]);

  useEffect(() => {
    window.addEventListener('gamepadconnected', ev => onConnected(ev, setPressed));
    window.addEventListener('gamepaddisconnected', onDisconnected);
  }, []);

  return <globalContext.Provider value={onPressHook}>{props.children}</globalContext.Provider>;
};

export default () => useContext(globalContext);
