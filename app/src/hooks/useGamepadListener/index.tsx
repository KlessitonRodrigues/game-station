import { useEffect, useState } from 'react';

import { onConnected, onDisconnected } from './services/gamepad';

const UseGamepadListener = (onPressedMap: App.Gamepad.ButtonMap) => {
  const [pressed, setPressed] = useState<App.Gamepad.Buttons[]>([]);

  useEffect(() => {
    const button = pressed[0];
    if (onPressedMap[button]) onPressedMap[button]();
  }, [pressed]);

  useEffect(() => {
    const listener = (ev: GamepadEvent) => onConnected(ev, setPressed);
    window.addEventListener('gamepadconnected', listener);
    window.addEventListener('gamepaddisconnected', onDisconnected);
    return () => {
      window.removeEventListener('gamepadconnected', listener);
      window.removeEventListener('gamepaddisconnected', onDisconnected);
    };
  }, []);
};

export default UseGamepadListener;
