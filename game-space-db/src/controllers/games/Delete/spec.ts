import { testConfig } from '../../../util/jest';
import { gameInfoObj } from '../../../util/jestData';
import { createGameInfo } from '../Create';
import { deleteGameInfo } from './index';

const config = testConfig();

test('Should delete a game info from database', () => {
  const gameInfo = gameInfoObj();
  createGameInfo(config)({ gameInfo });
  const db = deleteGameInfo(config)({ name: gameInfo.name });
  const index = db.games.findIndex(game => game.name === gameInfo.name);
  expect(index < 0).toBeTruthy();
});

test('Should not delete when item not found', () => {
  try {
    const gameInfo = gameInfoObj();
    createGameInfo(config)({ gameInfo });
    deleteGameInfo(config)({ name: 'invalid-name' });
  } catch (e) {
    expect(e.message).toBe('ItemNotFound');
  }
});

test('Should not delete if invalid name property', () => {
  try {
    deleteGameInfo(config)({ name: undefined });
  } catch (e) {
    expect(e.message).toBe('InvalidNameProperty');
  }
});
