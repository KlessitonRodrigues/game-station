declare namespace GamepadTypes {
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

  type OnButtomPressed = (buttons: Buttons[]) => void;

  type ButtonMap = Partial<Record<Buttons, () => void>>;
}
