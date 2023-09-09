import { GamesAPI } from './gamesAPI';
import { SettingsAPI } from './settingsAPI';
import { DataAPI } from './dataAPI';

export const controllers = (config: AppDB.API.Config): AppDB.API.Methods => ({
  games: GamesAPI(config),
  settings: SettingsAPI(config),
  data: DataAPI(config),
});
