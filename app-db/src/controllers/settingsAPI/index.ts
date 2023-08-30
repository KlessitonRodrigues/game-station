export const SettingsAPI = (config: LocalDB.Config): LocalDB.SettingsAPI => {
  const read: LocalDB.SettingsAPI['read'] = () => {
    return config.readDB().settings;
  };

  const update: LocalDB.SettingsAPI['update'] = args => {
    const { settings } = args;
    const db = config.readDB();
    return config.saveDB({ ...db, settings: { ...db.settings, ...settings } });
  };

  return {
    read,
    update,
  };
};
