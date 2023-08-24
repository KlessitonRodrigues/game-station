// @ts-ignore
import localDB from 'app-db';

const dbName = 'console_ui_db';

export const dbClient: LocalDB.API = localDB({
  readDB: (): LocalDB.Data => {
    return JSON.parse(window.localStorage.getItem(dbName) || '{}') as LocalDB.Data;
  },

  saveDB: (data: LocalDB.Data) => {
    data.updatedAt = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
});
