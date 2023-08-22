/*
export const testEnviroment = () => {
  process.env['ENV_VARS'] = '123456789';
};
*/

const TestData = (): LocalDB.Data => ({
  updatedAt: '',
  games: [],
  settings: { bgOption: '', fullscreen: false },
});

export const testConfig = (): LocalDB.Config => {
  let virtualStorage: LocalDB.Data = TestData();
  return {
    readDB: () => virtualStorage,
    saveDB: data => {
      data.updatedAt = new Date().toISOString();
      virtualStorage = data;
      return virtualStorage;
    },
  };
};
