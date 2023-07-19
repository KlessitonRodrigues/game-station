export const updateSettings = (config: DBConfig) => (args: UpdateSettings) => {
  const { settings } = args;
  const db = config.readDB();
  return config.saveDB({ ...db, settings: { ...db.settings, ...settings } });
};
