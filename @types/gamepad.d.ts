type GamepadButtons =
  | "LeftStick"
  | "LeftStickUp"
  | "LeftStickDown"
  | "LeftStickLeft"
  | "LeftStickRight"
  | "RightStick"
  | "RightStickUp"
  | "RightStickDown"
  | "RightStickLeft"
  | "RightStickRight"
  | "TriggerLeft"
  | "TriggerRight"
  | "ButtonLeft"
  | "ButtonRight"
  | "ButtonA"
  | "ButtonB"
  | "ButtonX"
  | "ButtonY"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ButtonStart"
  | "ButtonSelect"
  | "ButtonHome";

type GamepadMap = Record<string, GamepadButtons>;

type OnButtomPressed = (buttons: GamepadButtons[]) => void;

type GamepadConnected = {};

type GamepadDisconnected = {};
