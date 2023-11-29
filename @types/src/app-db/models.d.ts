declare namespace AppDB {
  namespace Models {
    type SettingsInfo = {
      fullscreen: boolean;
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
}
