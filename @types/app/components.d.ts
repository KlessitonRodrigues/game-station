declare namespace App {
  namespace Props {
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
        | 'controls'
        | 'edit'
        | 'spinner';
      style?: React.CSSProperties;
    };

    type MappedGamepad = {
      pressed: App.Gamepad.Buttons[];
    };

    type ColorPicker = {
      active?: boolean;
      value?: string;
      onChange?: (color: Utils.GradientBgOptions) => void;
    };

    type DynamicBg = {
      img?: string;
      gradient?: string;
      blur?: boolean;
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

    type InputModal = {
      type: 'text' | 'img' | 'file' | 'color';
      active: boolean;
      title: string;
      value: string;
      onChange: (value: string) => void;
    };

    type RoundedIcon = {
      content: string;
    };

    type GamepadButtons = {
      buttons: {
        type?: 'rounded';
        content: string;
        label: string;
      }[];
    };
    type GameList = {
      gameList: AppDB.Models.GameInfo[];
      gameIndex: number;
      onChangeGame: (gameIndex: number) => any;
      onStartGame: (gameIndex: number) => any;
    };
  }
}
