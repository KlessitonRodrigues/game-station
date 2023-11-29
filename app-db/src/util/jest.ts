/*
export const testEnviroment = () => {
  process.env['ENV_VARS'] = '123456789';
};
*/

const TestData = (): AppDB.API.Data => ({
  updatedAt: '',
  games: [],
  settings: { fullscreen: false },
});

export const testConfig = (): AppDB.API.Config => {
  let virtualStorage: AppDB.API.Data = TestData();
  return {
    readDB: () => virtualStorage,
    saveDB: data => {
      data.updatedAt = new Date().toISOString();
      virtualStorage = data;
      return virtualStorage;
    },
  };
};
