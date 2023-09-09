import { xboxButtonsId } from './gamepadButtons';

const buttonLoop = (gamepadIndex: number, onPress: App.Gamepad.OnButtomPressed) => {
  const lastUpdate = { time: 0, buttons: [''] };
  return setInterval(() => {
    const { timestamp, axes, buttons } = navigator.getGamepads()[gamepadIndex];
    const pressedButtons: App.Gamepad.Buttons[] = [];

    if (timestamp === lastUpdate.time) return (lastUpdate.time = timestamp);
    else lastUpdate.time = timestamp;

    axes.forEach((axis, i) => {
      if (!(axis === 1 || axis === -1)) return false;
      const axisId = `axis${i}${axis > 0 ? 'Pos' : 'Neg'}`;
      if (xboxButtonsId[axisId]) pressedButtons.push(xboxButtonsId[axisId]);
    });

    buttons.forEach((Button, i) => {
      if (Button.value === 0) return false;
      const buttonId = `button${i}`;
      if (xboxButtonsId[buttonId]) pressedButtons.push(xboxButtonsId[buttonId]);
    });

    if (lastUpdate.buttons.toString() !== pressedButtons.toString()) {
      lastUpdate.buttons = pressedButtons;
      onPress && onPress(pressedButtons);
    }
  }, 33.33); // 30 FPS
};

const buttonLoopInterval: NodeJS.Timer[] = [];

export const onConnected = (ev: GamepadEvent, onPress: App.Gamepad.OnButtomPressed) => {
  console.log('Connected', ev.gamepad.id);
  buttonLoopInterval.push(buttonLoop(ev.gamepad.index, onPress));
};

export const onDisconnected = (ev: GamepadEvent) => {
  console.log('Disconnected', ev.gamepad.id);
  buttonLoopInterval.forEach(int => clearInterval(int));
};
