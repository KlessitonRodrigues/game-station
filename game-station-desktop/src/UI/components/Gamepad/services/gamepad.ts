import { xboxMap } from "./map";

const buttonLoop = (gamepadIndex: number, onPress: OnButtomPressed) => {
  const lastUpdate = { time: 0, buttons: [""] };
  return setInterval(() => {
    const { timestamp, axes, buttons } = navigator.getGamepads()[gamepadIndex];
    const pressedButtons: GamepadButtons[] = [];

    if (timestamp === lastUpdate.time) return (lastUpdate.time = timestamp);
    else lastUpdate.time = timestamp;

    axes.forEach((axis, i) => {
      if (!(axis === 1 || axis === -1)) return false;
      const axisId = `axis${i}${axis > 0 ? "Pos" : "Neg"}`;
      if (xboxMap[axisId]) pressedButtons.push(xboxMap[axisId]);
    });

    buttons.forEach((Button, i) => {
      if (Button.value === 0) return false;
      const buttonId = `button${i}`;
      if (xboxMap[buttonId]) pressedButtons.push(xboxMap[buttonId]);
    });

    if (lastUpdate.buttons.toString() !== pressedButtons.toString()) {
      lastUpdate.buttons = pressedButtons;
      onPress && onPress(pressedButtons);
    }
  }, 100); // 10 FPS
};

const buttonLoopInterval: NodeJS.Timer[] = [];

export const onConnected = (ev: GamepadEvent, onPress: OnButtomPressed) => {
  console.log("Connected", ev.gamepad.id);
  buttonLoopInterval.push(buttonLoop(ev.gamepad.index, onPress));
};

export const onDisconnected = (ev: GamepadEvent) => {
  console.log("Disconnected", ev.gamepad.id);
  buttonLoopInterval.forEach((int) => clearInterval(int));
};
