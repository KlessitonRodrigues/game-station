// @ts-ignore
import initDB from 'game-station-db';

const dbName = 'game-station';

const dbConfig: LocalDB.Config = {
  readDB: (): LocalDB.Data => {
    return JSON.parse(window.localStorage.getItem(dbName) || '{}') as LocalDB.Data;
  },
  saveDB: (data: LocalDB.Data) => {
    data.updatedAt = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
};

export const dbClient: LocalDB.Methods = initDB(dbConfig);
