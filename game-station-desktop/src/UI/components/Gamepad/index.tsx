import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { onConnected, onDisconnected } from './services/gamepad';
import { MappedGamepad } from './services/mappedIcon';
import { Container } from './styled';

const GamepadPanel = () => {
  const [pressed, setPressed] = useGamepad();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('gamepadconnected', ev => {
      onConnected(ev, newPressed => setPressed(newPressed));
    });
    window.addEventListener('gamepaddisconnected', ev => {
      onDisconnected(ev);
    });
  }, []);

  return <Container show={visible}>{visible && <MappedGamepad pressed={pressed} />}</Container>;
};

export default GamepadPanel;
