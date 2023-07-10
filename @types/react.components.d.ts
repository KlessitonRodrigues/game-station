type HeaderProps = {
  icon: React.ReactElement;
  title: string;
  githubIcon: React.ReactElement;
  githubLink: string;
};

type TextAreaProps = {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

type ButtonProps = {
  label?: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  variant?: "base" | "outline" | "solid";
  color?: "main" | "red" | "blue" | "green" | "yellow" | "transparent";
  onChange?: () => void;
  disabled?: boolean;
};

type InputProps = {
  label?: string;
  type?: "time" | "date" | "textArea";
  value?: string;
  placeHolder?: string;
  required?: boolean;
  readonly?: boolean;
  description?: string;
  onChange?: (value: string) => void;
};

type IfProps = {
  check: boolean;
  true?: React.ReactElement;
  false?: React.ReactElement;
  children?: React.ReactElement;
};

type IconsProps = {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  onPress?: () => void;
  type: "games" | "apps" | "music" | "news" | "theme" | "settings";
};

type MappedGamepadProps = {
  pressed: GamepadButtons[];
};
