import { testingGames, testingSettings } from './services/demoData';

export const DataAPI = (config: LocalDB.Config): LocalDB.DataAPI => {
  const initialData: LocalDB.DataAPI['initialData'] = () => {
    const db = config.readDB();
    db.games = [];
    db.settings = testingSettings;
    return config.saveDB(db);
  };

  const testData: LocalDB.DataAPI['testData'] = () => {
    const db = config.readDB();
    db.games = testingGames;
    db.settings = testingSettings;
    return config.saveDB(db);
  };

  return {
    initialData,
    testData,
  };
};
