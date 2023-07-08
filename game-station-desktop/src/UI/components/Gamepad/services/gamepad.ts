import { xboxMap } from "./map";

const getAxisPressedLabel = (axis: number, i: number) => {
  if (!(axis === 1 || axis === -1)) return false;
  const axisId = `axis${i}${axis > 0 ? "Pos" : "Neg"}`;
  return xboxMap[axisId];
};

const getButtonPressedLabel = (axis: number, i: number) => {
  if (axis === 0) return false;
  const buttonId = `button${i}`;
  return xboxMap[buttonId];
};

const buttonLoop = (gamepadIndex: number, onPress: OnButtomPressed) => {
  const lastUpdate = { time: 0 };
  return setInterval(() => {
    const { timestamp, axes, buttons } = navigator.getGamepads()[gamepadIndex];
    const pressedButtons: GamepadButtons[] = [];

    if (timestamp === lastUpdate.time) return (lastUpdate.time = timestamp);
    lastUpdate.time = timestamp;

    axes.forEach((axis, i) => {
      const label = getAxisPressedLabel(axis, i);
      if (label) pressedButtons.push(label);
    });

    buttons.forEach((Button, i) => {
      const label = getButtonPressedLabel(Button.value, i);
      if (label) pressedButtons.push(label);
    });

    onPress && onPress(pressedButtons);
  }, 33);
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
