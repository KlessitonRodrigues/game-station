import { testConfig } from '../../../util/jest';
import { gameInfoObj } from '../../../util/jestData';
import { createGameInfo } from './index';

const config = testConfig();

test('Should create a game info on database', () => {
  const gameInfo = gameInfoObj();
  const db = createGameInfo(config)({ gameInfo });
  const addedGame = db.games.find(g => g.name === gameInfo.name);
  expect(addedGame).toMatchObject(gameInfo);
});

test('Should not create the same game name on database', () => {
  try {
    const gameInfo = gameInfoObj();
    createGameInfo(config)({ gameInfo });
  } catch (e) {
    expect(e.message).toBe('GameAlreadyExists');
  }
});

test('Should not create if gameInfo arg is invalid', () => {
  try {
    createGameInfo(config)({ gameInfo: null });
  } catch (e) {
    expect(e.message).toBe('InvalidGameInfoArgument');
  }
});

test('Should not create if name property is invalid', () => {
  try {
    const gameInfo = gameInfoObj();
    gameInfo.name = undefined;
    createGameInfo(config)({ gameInfo });
  } catch (e) {
    expect(e.message).toBe('InvalidGameInfoArgument');
  }
});
