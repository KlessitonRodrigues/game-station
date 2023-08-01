import { testConfig } from '../../../util/jest';
import { updateSettings } from './index';

const config = testConfig();

test('Should update app settings on database', () => {
  updateSettings(config)({ settings: { fullscreen: true } });
  expect(config.readDB().settings.fullscreen).toBeTruthy();
  updateSettings(config)({ settings: { fullscreen: false } });
  expect(config.readDB().settings.fullscreen).toBeFalsy();
});
