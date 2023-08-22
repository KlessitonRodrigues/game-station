import { testConfig } from '../../util/jest';
import { gameInfoObj } from '../../util/jestData';
import { GamesAPI } from './index';

describe('When reading games', () => {
  const config = testConfig();

  test('Should read a game info from database', () => {
    const gameInfo = gameInfoObj();
    GamesAPI(config).create({ gameInfo });
    const games = GamesAPI(config).read();
    const addedGame = games.find(g => g.name === gameInfo.name);
    expect(addedGame).toMatchObject(gameInfo);
  });
});

describe('When creating games', () => {
  const config = testConfig();

  test('Should create a game info on database', () => {
    const gameInfo = gameInfoObj();
    const db = GamesAPI(config).create({ gameInfo });
    const addedGame = db.games.find(g => g.name === gameInfo.name);
    expect(addedGame).toMatchObject(gameInfo);
  });

  test('Should not create the same game name on database', () => {
    try {
      const gameInfo = gameInfoObj();
      GamesAPI(config).create({ gameInfo });
    } catch (e) {
      expect(e.message).toBe('GameAlreadyExists');
    }
  });

  test('Should not create if gameInfo arg is invalid', () => {
    try {
      GamesAPI(config).create({ gameInfo: null });
    } catch (e) {
      expect(e.message).toBe('InvalidGameInfoArgument');
    }
  });

  test('Should not create if name property is invalid', () => {
    try {
      const gameInfo = gameInfoObj();
      gameInfo.name = undefined;
      GamesAPI(config).create({ gameInfo });
    } catch (e) {
      expect(e.message).toBe('InvalidGameInfoArgument');
    }
  });
});

describe('When updating games', () => {
  const config = testConfig();

  test('Should update a game info on database', () => {
    const gameInfo = gameInfoObj();
    GamesAPI(config).create({ gameInfo });
    const newGameInfo = gameInfoObj();
    newGameInfo.year = 'new-year';
    newGameInfo.description = 'new-description';
    newGameInfo.publisher = 'new-publisher';
    const db = GamesAPI(config).update({ gameInfo: newGameInfo });
    const updatedGame = db.games.find(g => g.name === gameInfo.name);
    expect(updatedGame).not.toMatchObject(gameInfo);
  });

  test('Should not update when item not found', () => {
    try {
      const newGameInfo = gameInfoObj();
      newGameInfo.name = 'invalid-name';
      GamesAPI(config).update({ gameInfo: newGameInfo });
    } catch (e) {
      expect(e.message).toBe('ItemNotFound');
    }
  });

  test('Should not update if game info is invalid', () => {
    try {
      GamesAPI(config).update({ gameInfo: null });
    } catch (e) {
      expect(e.message).toBe('InvalidGameInfoArgument');
    }
  });

  test('Should not update if name property is invalid', () => {
    try {
      const newGameInfo = gameInfoObj();
      newGameInfo.name = undefined;
      GamesAPI(config).update({ gameInfo: newGameInfo });
    } catch (e) {
      expect(e.message).toBe('InvalidGameInfoArgument');
    }
  });
});

describe('When Removing games', () => {
  const config = testConfig();

  test('Should remove a game info from database', () => {
    const gameInfo = gameInfoObj();
    GamesAPI(config).create({ gameInfo });
    const db = GamesAPI(config).remove({ name: gameInfo.name });
    const index = db.games.findIndex(game => game.name === gameInfo.name);
    expect(index < 0).toBeTruthy();
  });

  test('Should not remove when item not found', () => {
    try {
      const gameInfo = gameInfoObj();
      GamesAPI(config).create({ gameInfo });
      GamesAPI(config).remove({ name: 'invalid-name' });
    } catch (e) {
      expect(e.message).toBe('ItemNotFound');
    }
  });

  test('Should not remove if invalid name property', () => {
    try {
      GamesAPI(config).remove({ name: undefined });
    } catch (e) {
      expect(e.message).toBe('InvalidNameProperty');
    }
  });
});
