declare namespace App {
  namespace Hooks {
    // usePath
    type PathState =
      | 'games/list/bar'
      | 'games/list/grid'
      | 'games/add'
      | 'apps'
      | 'apps'
      | 'music'
      | 'midia'
      | 'web'
      | 'theme'
      | 'controls'
      | 'settings';

    type PathContext = [PathState, React.Dispatch<React.SetStateAction<PathState>>];

    // useGlobalContext
    type GlobalState = {
      isFirstRun: boolean;
      gradientBg: Utils.GradientBgOptions;
      imgBg: string;
      isBrowser: boolean;
    };

    type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>];

    // useThemeTypeContext
    type ThemeTypeState = {
      darkTheme: boolean;
      mainColor?: string;
    };

    type ThemeTypeContext = [ThemeTypeState, React.Dispatch<React.SetStateAction<ThemeTypeState>>];

    // useSendDataContext
    type SendDataState = {
      to: 'TESTING';
      data: { something: string };
    };

    type SendDataContext = [SendDataState, React.Dispatch<React.SetStateAction<SendDataState>>];

    // useLangContext
    type LangState = {
      type: 'en' | 'pt';
      text: Language.Content;
    };

    type LangContext = [LangState, React.Dispatch<React.SetStateAction<LangState>>];

    // useGamepadContext
    type GamepadContext = Gamepad.OnPressed;

    // useUIState
    type UseUIState = {
      active: boolean;
      focus: number;
      option: number;
      loading: boolean;
      setUI: (key: 'active' | 'focus' | 'option' | 'loading', value: boolean | number) => void;
    };
  }
}
