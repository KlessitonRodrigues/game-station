import { testingGames, settingsData } from './services/demoData';

export const DataAPI = (config: LocalDB.Config): LocalDB.DataAPI => {
  const initialData: LocalDB.DataAPI['initialData'] = () => {
    const db = config.readDB();
    db.games = [];
    db.settings = settingsData;
    return config.saveDB(db);
  };

  const testData: LocalDB.DataAPI['testData'] = () => {
    const db = config.readDB();
    if (!db.games?.length) db.games = testingGames;
    db.settings = settingsData;
    return config.saveDB(db);
  };

  return {
    initialData,
    testData,
  };
};
