export const SettingsAPI = (config: AppDB.API.Config): AppDB.API.SettingsAPI => {
  const read: AppDB.API.SettingsAPI['read'] = () => {
    return config.readDB().settings;
  };

  const update: AppDB.API.SettingsAPI['update'] = args => {
    const { settings } = args;
    const db = config.readDB();
    return config.saveDB({ ...db, settings: { ...db.settings, ...settings } });
  };

  return {
    read,
    update,
  };
};
