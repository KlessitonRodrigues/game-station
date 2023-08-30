// @ts-ignore
import localDB from 'app-db';

const dbName = 'console_ui_db';

export const dbClient: AppDB.API.Methods = localDB({
  readDB: (): AppDB.API.Data => {
    return JSON.parse(window.localStorage.getItem(dbName) || '{}') as AppDB.API.Data;
  },

  saveDB: (data: AppDB.API.Data) => {
    data.updatedAt = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
});

dbClient.data.testData();
