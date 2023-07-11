import { useEffect, useState } from 'react';
import useNavigationContext, { updateButtons } from 'src/hooks/useNavigationContext';

import { onConnected, onDisconnected } from './services/gamepad';
import { MappedGamepad } from './services/mappedIcon';
import { Container } from './styled';

const GamepadPanel = () => {
  const [nav, setNav] = useNavigationContext();
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState<GamepadButtons[]>([]);

  useEffect(() => {
    window.addEventListener('gamepadconnected', ev => {
      onConnected(ev, setPressed);
    });
    window.addEventListener('gamepaddisconnected', ev => {
      onDisconnected(ev);
    });
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    setNav(
      updateButtons(nav, {
        ButtonB: () => setVisible(false),
        ArrowUp: () => setVisible(true),
      })
    );
  }, [visible]);

  useEffect(() => {
    if (!pressed.length) return undefined;
    pressed.forEach(btn => {
      const run = nav.buttonMap[btn];
      run && run();
    });
  }, [pressed]);

  return <Container show={visible}>{visible && <MappedGamepad pressed={pressed} />}</Container>;
};

export default GamepadPanel;
