export const readSettings = (config: DBConfig) => () => {
  return config.readDB().settings;
};
