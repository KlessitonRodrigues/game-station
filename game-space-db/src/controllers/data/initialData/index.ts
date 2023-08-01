const testingGames: GameInfo[] = [];

const testingSettings: SettingsInfo = {
  bgOption: 'linear-gradient(150deg,#00b8d4,#c51162 80%);',
  fullscreen: false,
};

export const initialData = (config: DBConfig) => () => {
  const db = config.readDB();
  db.games = testingGames;
  db.settings = testingSettings;
  return config.saveDB(db);
};
