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
  variant?: 'base' | 'outline' | 'solid';
  color?: 'main' | 'red' | 'blue' | 'green' | 'yellow' | 'transparent';
  onChange?: () => void;
  disabled?: boolean;
};

type InputProps = {
  label?: string;
  type?: 'time' | 'date' | 'textArea';
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
  size?: number;
  onPress?: () => void;
  type:
    | 'games'
    | 'apps'
    | 'music'
    | 'midia'
    | 'web'
    | 'news'
    | 'theme'
    | 'settings'
    | 'user'
    | 'battery'
    | 'arrow-left'
    | 'arrow-right'
    | 'gamepad'
    | 'search'
    | 'folder'
    | 'file'
    | 'image'
    | 'usb'
    | 'controls';
};

type MappedGamepadProps = {
  pressed: GamepadButtons[];
};

type ColorPickerProps = {
  active?: boolean;
  value?: string;
  onChange?: (color: string) => void;
};

type DynamicBgProps = {
  img?: string;
  gradient?: string;
  zIndex?: number;
};

type BrowseImagesProps = {
  active: boolean;
  query: string;
  sufix: string;
  onChange?: (url: string) => void;
};

type BrowseFoldersProps = {
  active: boolean;
  path: string;
  onChange?: (folder: string, execultableName: string) => void;
};

type PanelProps = {
  active: boolean;
  title: string;
  value: string;
  children?: React.ReactElement;
};
