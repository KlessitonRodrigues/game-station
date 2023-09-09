import { dbClient } from 'src/config/db';

export const initialGlobalState: App.Hooks.GlobalState = {
  gradientBg: dbClient.settings.read()?.bgOption,
  imgBg: '',
};
