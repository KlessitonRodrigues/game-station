declare namespace Props {
  type Header = {
    icon: React.ReactElement;
    title: string;
    githubIcon: React.ReactElement;
    githubLink: string;
  };

  type TextArea = {
    label?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (value: string) => void;
  };

  type Button = {
    label?: string;
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
    variant?: 'base' | 'outline' | 'solid';
    color?: 'main' | 'red' | 'blue' | 'green' | 'yellow' | 'transparent';
    onChange?: () => void;
    disabled?: boolean;
  };

  type Input = {
    label?: string;
    type?: 'time' | 'date' | 'textArea';
    value?: string;
    placeHolder?: string;
    required?: boolean;
    readonly?: boolean;
    description?: string;
    onChange?: (value: string) => void;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };

  type Icons = {
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

  type MappedGamepad = {
    pressed: GamepadTypes.ButtonMap[];
  };

  type ColorPicker = {
    active?: boolean;
    value?: string;
    onChange?: (color: string) => void;
  };

  type DynamicBg = {
    img?: string;
    gradient?: string;
    zIndex?: number;
  };

  type BrowseImages = {
    active: boolean;
    query: string;
    sufix: string;
    onChange?: (url: string) => void;
  };

  type BrowseFolders = {
    active: boolean;
    path: string;
    onChange?: (folder: string, execultableName: string) => void;
  };

  type Panel = {
    active: boolean;
    title: string;
    value: string;
    children?: React.ReactElement;
  };
}
