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
      createdAt: string;
      hidden: boolean;
      year: string;
      rate: string;
      path: string;
    };
  }
}
