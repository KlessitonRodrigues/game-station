/*
export const testEnviroment = () => {
  process.env['ENV_VARS'] = '123456789';
};
*/

const TestData = (): DBData => ({
  updatedAt: '',
  games: [],
  settings: { bgOption: '', fullscreen: false },
});

export const testConfig = (): DBConfig => {
  let virtualStorage: DBData = TestData();
  return {
    readDB: () => virtualStorage,
    saveDB: data => {
      data.updatedAt = new Date().toISOString();
      virtualStorage = data;
      return virtualStorage;
    },
  };
};
