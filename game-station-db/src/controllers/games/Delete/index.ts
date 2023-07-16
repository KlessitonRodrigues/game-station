export const deleteGameInfo = (config: DBConfig) => (args: DeleteGameInfo) => {
  const { name } = args;
  const db = config.readDB();

  if (!name) throw new Error('InvalidNameProperty');

  const index = db.games.findIndex(game => game.name === name);
  if (index < 0) throw new Error('ItemNotFound');

  db.games.splice(index, 1);
  return config.saveDB(db);
};
