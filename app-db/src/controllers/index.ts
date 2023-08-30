import { GamesAPI } from './gamesAPI';
import { SettingsAPI } from './settingsAPI';
import { DataAPI } from './dataAPI';

export const controllers = (config: LocalDB.Config): LocalDB.API => ({
  games: GamesAPI(config),
  settings: SettingsAPI(config),
  data: DataAPI(config),
});
