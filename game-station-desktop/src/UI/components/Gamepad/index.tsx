import { onConnected, onDisconnected } from "./services/gamepad";
import { MappedGamepad } from "./services/mappedIcon";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import useNavigationContext from "src/hooks/useNavigationContext";

const GamepadPanel = () => {
  const [nav, setNav] = useNavigationContext();
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState<GamepadButtons[]>([]);

  useEffect(() => {
    window.addEventListener("gamepadconnected", (ev) => {
      onConnected(ev, setPressed);
      setVisible(true);
    });
    window.addEventListener("gamepaddisconnected", (ev) => {
      onDisconnected(ev);
    });
  }, []);

  useEffect(() => {
    if (visible) {
      setNav({
        path: ["gamepad"],
        buttonMap: {
          ...nav.buttonMap,
          ButtonB: () => setVisible(false),
          ArrowUp: () => setVisible(true),
        },
      });
    }
  }, [visible]);

  useEffect(() => {
    if (!pressed.length) return undefined;
    pressed.forEach((btn) => {
      const run = nav.buttonMap[btn];
      run && run();
    });
  }, [pressed]);

  return (
    <Container show={visible}>
      {visible && <MappedGamepad pressed={pressed} />}
    </Container>
  );
};

export default GamepadPanel;
