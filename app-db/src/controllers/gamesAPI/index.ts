export const GamesAPI = (config: LocalDB.Config): LocalDB.GameAPI => {
  const read: LocalDB.GameAPI['read'] = () => {
    return config.readDB().games || [];
  };

  const create: LocalDB.GameAPI['create'] = args => {
    const { gameInfo } = args;
    const db = config.readDB();
    if (!gameInfo?.name) throw new Error(`InvalidGameInfoArgument`);
    if (db.games.some(g => g.name === gameInfo.name)) throw new Error(`GameAlreadyExists`);
    db.games.push(gameInfo);
    return config.saveDB(db);
  };

  const update: LocalDB.GameAPI['update'] = args => {
    const { gameInfo } = args;
    if (!gameInfo?.name) throw new Error('InvalidGameInfoArgument');
    const db = config.readDB();
    const index = db.games.findIndex(g => g.name === gameInfo.name);
    if (index < 0) throw new Error('ItemNotFound');
    const updateItem = db.games[index];
    db.games[index] = { ...updateItem, ...gameInfo };
    return config.saveDB(db);
  };

  const remove: LocalDB.GameAPI['remove'] = args => {
    const { name } = args;
    const db = config.readDB();
    if (!name) throw new Error('InvalidNameProperty');
    const index = db.games.findIndex(game => game.name === name);
    if (index < 0) throw new Error('ItemNotFound');
    db.games.splice(index, 1);
    return config.saveDB(db);
  };

  return {
    read,
    create,
    remove,
    update,
  };
};
