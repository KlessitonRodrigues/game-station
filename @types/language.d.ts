declare namespace Language {
  type Options = "en" | "pt";

  type Content = Record<TextId, string>;

  type TextId =
    | "app_startGameBtn"
    | "app_gameDetailsBtn"
    | "tab_games"
    | "tab_apps"
    | "tab_web"
    | "tab_theme"
    | "tab_settings"
    | "tab_controller"
    | "addGame_nameInput"
    | "addGame_publishInput"
    | "addGame_coverImage"
    | "addGame_bgImage"
    | "addGame_bgImage"
    | "addGame_addGameBtn";
}
