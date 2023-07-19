type DBConfig = {
  saveDB: (data: DBData) => DBData;
  readDB: () => DBData;
};

type DBControllers = {
  games: {
    read: () => DBData['games'];
    create: (args: CreateGameInfo) => DBData;
    update: (args: UpdateGameInfo) => DBData;
    dalete: (args: DeleteGameInfo) => DBData;
  };
  settings: {
    read: () => SettingsInfo;
    update: (args: UpdateSettings) => DBData;
  };
  data: {
    initialData: () => void;
    testData: () => void;
  };
};

// DATA
type DBData = {
  updatedAt: string;
  settings: SettingsInfo;
  games: GameInfo[];
};

type SettingsInfo = {
  fullscreen: boolean;
  bgOption: string;
};

type GameInfo = {
  name: string;
  publisher: string;
  cover: string;
  background: string;
  addedAt: string;
  hidden: boolean;
  year: string;
  rate: string;
  description: string;
};

// CONTROLLERS
type CreateGameInfo = {
  gameInfo: GameInfo;
};

type UpdateGameInfo = {
  gameInfo: Partial<GameInfo>;
};

type DeleteGameInfo = {
  name: string;
};

type UpdateSettings = {
  settings: Partial<SettingsInfo>;
};
