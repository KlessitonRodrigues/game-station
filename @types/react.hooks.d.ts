// usePathContext
type PathState = {
  path: string[];
};

type PathContext = [PathState, React.Dispatch<React.SetStateAction<PathState>>];

// useGlobalContext
type GlobalState = {
  gradientBg: string;
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
  text: LangContent;
};

type LangContext = [LangState, React.Dispatch<React.SetStateAction<LangState>>];

// useGamepadContext
type GamepadContext = [GamepadButtons[], React.Dispatch<React.SetStateAction<GamepadButtons[]>>];
