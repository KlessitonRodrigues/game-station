export const createGameInfo = (config: LocalDB.Config) => (args: LocalDB.CreateGame) => {
  const { gameInfo } = args;
  const db = config.readDB();
  if (!gameInfo?.name) throw new Error(`InvalidGameInfoArgument`);
  if (db.games.some(g => g.name === gameInfo.name)) throw new Error(`GameAlreadyExists`);

  db.games.push(gameInfo);
  return config.saveDB(db);
};
