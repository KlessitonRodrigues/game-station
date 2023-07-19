import { testData } from './data/TestData';
import { createGameInfo } from './games/Create';
import { deleteGameInfo } from './games/Delete';
import { readGameInfo } from './games/Read';
import { updateGameInfo } from './games/Update';
import { readSettings } from './settings/Read';
import { updateSettings } from './settings/Update';

export const controllers = (config: DBConfig): DBControllers => ({
  games: {
    create: createGameInfo(config),
    read: readGameInfo(config),
    dalete: deleteGameInfo(config),
    update: updateGameInfo(config),
  },
  settings: {
    read: readSettings(config),
    update: updateSettings(config),
  },
  data: {
    testData: testData(config),
    initialData: testData(config),
  },
});
