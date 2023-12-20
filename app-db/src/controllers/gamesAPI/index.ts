export const GamesAPI = (config: AppDB.API.Config): AppDB.API.GameAPI => {
  const read: AppDB.API.GameAPI['read'] = () => {
    return config.readDB().games || [];
  };

  const create: AppDB.API.GameAPI['create'] = args => {
    const { gameInfo } = args;
    if (!gameInfo?.name) throw new Error(`InvalidGameInfoArgument`);

    const db = config.readDB();
    const { games } = db;
    if (games?.some(g => g.name === gameInfo.name)) throw new Error(`GameAlreadyExists`);

    db.games?.push(gameInfo);

    return config.saveDB(db);
  };

  const update: AppDB.API.GameAPI['update'] = args => {
    const { gameInfo } = args;
    if (!gameInfo?.name) throw new Error('InvalidGameInfoArgument');

    const db = config.readDB();
    const index = db.games.findIndex(g => g.name === gameInfo.name);
    if (index < 0) throw new Error('ItemNotFound');

    const updateItem = db.games[index];
    db.games[index] = { ...updateItem, ...gameInfo };

    return config.saveDB(db);
  };

  const remove: AppDB.API.GameAPI['remove'] = args => {
    const { name } = args;
    if (!name) throw new Error('InvalidNameProperty');

    const db = config.readDB();

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
