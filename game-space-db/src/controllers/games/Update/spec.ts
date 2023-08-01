import { testConfig } from '../../../util/jest';
import { gameInfoObj } from '../../../util/jestData';
import { createGameInfo } from '../Create';
import { updateGameInfo } from './index';

const config = testConfig();

test('Should update a game info on database', () => {
  const gameInfo = gameInfoObj();
  createGameInfo(config)({ gameInfo });
  const newGameInfo = gameInfoObj();
  newGameInfo.year = 'new-year';
  newGameInfo.description = 'new-description';
  newGameInfo.publisher = 'new-publisher';
  const db = updateGameInfo(config)({ gameInfo: newGameInfo });
  const updatedGame = db.games.find(g => g.name === gameInfo.name);
  expect(updatedGame).not.toMatchObject(gameInfo);
});

test('Should not update when item not found', () => {
  try {
    const newGameInfo = gameInfoObj();
    newGameInfo.name = 'invalid-name';
    updateGameInfo(config)({ gameInfo: newGameInfo });
  } catch (e) {
    expect(e.message).toBe('ItemNotFound');
  }
});

test('Should not update if game info is invalid', () => {
  try {
    updateGameInfo(config)({ gameInfo: null });
  } catch (e) {
    expect(e.message).toBe('InvalidGameInfoArgument');
  }
});

test('Should not update if name property is invalid', () => {
  try {
    const newGameInfo = gameInfoObj();
    newGameInfo.name = undefined;
    updateGameInfo(config)({ gameInfo: newGameInfo });
  } catch (e) {
    expect(e.message).toBe('InvalidGameInfoArgument');
  }
});
