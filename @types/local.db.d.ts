declare namespace LocalDB {
  type Config = {
    saveDB: (data: Data) => Data;
    readDB: () => Data;
  };

  type Data = {
    updatedAt: string;
    settings: Models.SettingsInfo;
    games: Models.GameInfo[];
  };

  type API = {
    games: GameAPI;
    settings: SettingsAPI;
    data: DataAPI;
  };

  // API Methods
  type GameAPI = {
    read: () => Data['games'];
    create: (args: { gameInfo: Models.GameInfo }) => Data;
    update: (args: { gameInfo: Partial<Models.GameInfo> }) => Data;
    remove: (args: { name: string }) => Data;
  };

  type SettingsAPI = {
    read: () => Models.SettingsInfo;
    update: (args: { settings: Partial<Models.SettingsInfo> }) => Data;
  };

  type DataAPI = {
    initialData: () => void;
    testData: () => void;
  };
}
