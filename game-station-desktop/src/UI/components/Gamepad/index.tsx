import { onConnected, onDisconnected } from "./services/gamepad";
import { Container } from "./styled";
import { useEffect } from "react";

const GamepadPanel = () => {
  useEffect(() => {
    window.addEventListener("gamepadconnected", onConnected);
    window.addEventListener("gamepaddisconnected", onDisconnected);
  }, []);

  return (
    <Container>
      <div>GAMEPAD</div>
    </Container>
  );
};

export default GamepadPanel;
