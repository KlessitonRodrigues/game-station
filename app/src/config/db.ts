import localDB from 'app-db';

const dbName = 'games_db';

export const dbClient = localDB({
  readDB: () => {
    return JSON.parse(window.localStorage.getItem(dbName) || '{}');
  },

  saveDB: data => {
    data.updatedAt = new Date().toISOString();
    window.localStorage.setItem(dbName, JSON.stringify(data));
    return data;
  },
});

// dbClient.data.initialData();
