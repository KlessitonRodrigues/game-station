import { onConnected, onDisconnected } from "./services/gamepad";
import { Container } from "./styled";
import { useEffect, useState } from "react";

const GamepadPanel = () => {
  const [pressed, setPressed] = useState<GamepadButtons[]>([]);

  useEffect(() => {
    window.addEventListener("gamepadconnected", (ev) =>
      onConnected(ev, setPressed)
    );
    window.addEventListener("gamepaddisconnected", onDisconnected);
  }, []);

  return (
    <Container>
      <div>
        {pressed.map((btn) => (
          <div>{btn}</div>
        ))}
      </div>
    </Container>
  );
};

export default GamepadPanel;
