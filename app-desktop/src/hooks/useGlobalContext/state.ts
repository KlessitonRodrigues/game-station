import { dbClient } from 'src/config/db';

export const initialGlobalState: GlobalState = {
  gradientBg: dbClient.settings.read()?.bgOption,
};
