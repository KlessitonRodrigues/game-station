import { testConfig } from '../../../util/jest';
import { gameInfoObj } from '../../../util/jestData';
import { createGameInfo } from '../Create';
import { readGameInfo } from './index';

const config = testConfig();

test('Should read a game info from database', () => {
  const gameInfo = gameInfoObj();
  createGameInfo(config)({ gameInfo });
  const games = readGameInfo(config)();
  const addedGame = games.find(g => g.name === gameInfo.name);
  expect(addedGame).toMatchObject(gameInfo);
});
