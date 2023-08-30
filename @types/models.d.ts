declare namespace Models {
  type SettingsInfo = {
    fullscreen: boolean;
    bgOption: string;
  };

  type GameInfo = {
    name: string;
    description: string;
    publisher: string;
    cover: string;
    background: string;
    addedAt: string;
    hidden: boolean;
    year: string;
    rate: string;
    gamePath: string;
    gameFile: string;
  };
}
