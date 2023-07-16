export const readGameInfo = (config: DBConfig) => () => {
  return config.readDB().games;
};
