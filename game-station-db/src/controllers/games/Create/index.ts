export const createGameInfo = (config: DBConfig) => (args: CreateGameInfo) => {
  const { gameInfo } = args;
  const db = config.readDB();
  if (!gameInfo?.name) throw new Error(`InvalidGameInfoArgument`);
  if (db.games.some(g => g.name === gameInfo.name)) throw new Error(`GameAlreadyExists`);

  db.games.push(gameInfo);
  return config.saveDB(db);
};