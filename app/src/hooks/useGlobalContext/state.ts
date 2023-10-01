import { dbClient } from 'src/config/db';
import { nodeJS } from 'src/utils/electron/nodeJS';

export const initialGlobalState: App.Hooks.GlobalState = {
  isFirstRun: true,
  isBrowser: !nodeJS.isNodeAvailable,
  imgBg: '',
  gradientBg: dbClient.settings.read()?.bgOption,
};
