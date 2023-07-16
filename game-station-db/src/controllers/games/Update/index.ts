export const updateGameInfo = (config: DBConfig) => (args: UpdateGameInfo) => {
  const { gameInfo } = args;
  if (!gameInfo?.name) throw new Error('InvalidGameInfoArgument');

  const db = config.readDB();

  const index = db.games.findIndex(g => g.name === gameInfo.name);
  if (index < 0) throw new Error('ItemNotFound');

  const updateItem = db.games[index];
  db.games[index] = { ...updateItem, ...gameInfo };

  return config.saveDB(db);
};
