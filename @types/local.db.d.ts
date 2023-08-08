declare namespace LocalDB {
  type Config = {
    saveDB: (data: Data) => Data;
    readDB: () => Data;
  };

  type Data = {
    updatedAt: string;
    settings: SettingsInfo;
    games: GameInfo[];
  };

  type Methods = {
    games: {
      read: () => Data['games'];
      create: (args: CreateGame) => Data;
      update: (args: UpdateGame) => Data;
      dalete: (args: DeleteGame) => Data;
    };
    settings: {
      read: () => SettingsInfo;
      update: (args: UpdateSettings) => Data;
    };
    data: {
      initialData: () => void;
      testData: () => void;
    };
  };

  // Data Types

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
    folder: string;
    execultableName: string;
  };

  // Method Args Types

  type CreateGame = {
    gameInfo: GameInfo;
  };

  type UpdateGame = {
    gameInfo: Partial<GameInfo>;
  };

  type DeleteGame = {
    name: string;
  };

  type UpdateSettings = {
    settings: Partial<SettingsInfo>;
  };
}
