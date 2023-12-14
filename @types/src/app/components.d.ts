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
      variant?: "base" | "outline" | "solid";
      color?: "main" | "red" | "blue" | "green" | "yellow" | "transparent";
      onChange?: () => void;
      disabled?: boolean;
    };

    type Input = {
      label?: string;
      type?: "time" | "date" | "textArea";
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
        | "games"
        | "apps"
        | "music"
        | "midia"
        | "web"
        | "news"
        | "theme"
        | "settings"
        | "user"
        | "battery"
        | "arrow-left"
        | "arrow-right"
        | "gamepad"
        | "search"
        | "folder"
        | "file"
        | "image"
        | "usb"
        | "controls"
        | "edit"
        | "spinner"
        | "keyboard"
        | "mouse";
      style?: React.CSSProperties;
    };

    type MappedGamepad = {
      pressed: App.Gamepad.Buttons[];
    };

    type ColorPicker = {
      active?: boolean;
      value?: string;
      onChange?: (color: App.Utils.BgColors) => void;
    };

    type DynamicBg = {
      img?: string;
      color?: App.Utils.BgColors;
      blur?: boolean;
      layer?: number;
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
      focus: boolean;
      active: boolean;
      title: string;
      value: string;
      children?: React.ReactElement;
    };

    type InputField = {
      title: string;
      active: boolean;
      focus: boolean;
      type: "text" | "img" | "file" | "color";
      value: string;
      onChange: (value: string) => void;
      onClose: () => void;
    };

    type RoundedIcon = {
      content: string;
    };

    type GamepadButtons = {
      buttons: {
        label?: string;
        button: App.Gamepad.Buttons;
      }[];
    };

    type GameList = {
      mode: "bar" | "grid";
      index: number;
      game: AppDB.Models.GameInfo;
      list: AppDB.Models.GameInfo[];
      active: boolean;
      onChangeGame: (gameIndex: number) => any;
      onActiveGame: (gameIndex: number) => any;
      onStartGame: (path: string) => any;
    };

    type GameListScreen = {
      active: boolean;
      index: number;
      list: AppDB.Models.GameInfo[];
      game: AppDB.Models.GameInfo;
      onChangeGame: (gameIndex: number) => any;
      onActiveGame: (gameIndex: number) => any;
      onStartGame: (path: string) => any;
    };

    type Keyboard = {
      value: string;
      onChange: (value: string) => void;
      onEnterPress: () => void;
      onEscPress: () => void;
    };

    type Loading = {
      show: boolean;
      type: "fullScreen" | "icon";
      title?: string;
      description?: string;
    };

    type LayoutTypeDialog = {
      onSelect: (type: "list" | "grid") => void;
    };
  }
}
