declare namespace App {
  namespace Gamepad {
    type Buttons =
      | 'LeftStick'
      | 'LeftStickUp'
      | 'LeftStickDown'
      | 'LeftStickLeft'
      | 'LeftStickRight'
      | 'RightStick'
      | 'RightStickUp'
      | 'RightStickDown'
      | 'RightStickLeft'
      | 'RightStickRight'
      | 'TriggerLeft'
      | 'TriggerRight'
      | 'ButtonLeft'
      | 'ButtonRight'
      | 'ButtonA'
      | 'ButtonB'
      | 'ButtonX'
      | 'ButtonY'
      | 'ArrowUp'
      | 'ArrowDown'
      | 'ArrowLeft'
      | 'ArrowRight'
      | 'ButtonStart'
      | 'ButtonSelect'
      | 'ButtonHome';

    type GamepadMap = Record<string, Buttons>;

    type OnButtomPressed = (button: Buttons[]) => void;

    type ButtonMap = Partial<Record<Buttons, () => void>>;

    type OnPressed = (button: Buttons, cb: () => any) => void;

    type Control = {
      label: string;
      gamepadBtn: App.Gamepad.Buttons;
      onPressedFn: () => void;
    };
  }
}
