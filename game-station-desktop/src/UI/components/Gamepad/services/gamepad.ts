const buttonLoop = (gamepad: Gamepad) => {
  return setInterval(() => {
    console.log(gamepad.axes);
  }, 500);
};

export const onConnected = (ev: GamepadEvent) => {
  console.log("Connected", ev.gamepad.id);
  const gamepad = navigator.getGamepads()[ev.gamepad.index];
  buttonLoop(gamepad);
};

export const onDisconnected = (ev: GamepadEvent) => {
  console.log("Disconnected", ev.gamepad.id);
};
