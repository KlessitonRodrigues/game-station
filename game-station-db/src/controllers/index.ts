import { createGameInfo } from './games/Create';
import { deleteGameInfo } from './games/Delete';
import { readGameInfo } from './games/Read';
import { updateGameInfo } from './games/Update';

export const controllers = (config: DBConfig): DBControllers => ({
  games: {
    create: createGameInfo(config),
    read: readGameInfo(config),
    dalete: deleteGameInfo(config),
    update: updateGameInfo(config),
  },
  settings: {
    read: () => {},
    update: () => {},
  },
});
