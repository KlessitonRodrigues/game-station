// @ts-ignore
import initDB from 'game-station-db';

const dbName = 'game-station';

const dbConfig: DBConfig = {
  readDB: (): DBData => {
    const data = JSON.parse(window.localStorage.getItem(dbName) || '{}') as DBData;
    return data;
  },
  saveDB: (data: DBData) => {
    data.updatedAt = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
};

export const dbClient: DBControllers = initDB(dbConfig);

dbClient.data.testData();
