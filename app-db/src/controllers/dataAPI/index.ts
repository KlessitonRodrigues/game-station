import { testingGames, settingsData } from './services/demoData';

export const DataAPI = (config: AppDB.API.Config): AppDB.API.DataAPI => {
  const initialData: AppDB.API.DataAPI['initialData'] = () => {
    const db = config.readDB();
    console.log(db);

    if (!db.games?.length) db.games = [];
    if (!db.settings) db.settings = settingsData;

    return config.saveDB(db);
  };

  const testData: AppDB.API.DataAPI['testData'] = () => {
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
