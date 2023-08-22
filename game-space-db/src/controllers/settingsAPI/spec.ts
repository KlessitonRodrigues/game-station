import { testConfig } from '../../util/jest';
import { SettingsAPI } from './index';

const config = testConfig();

// Read
test('Should read app settings from database', () => {
  const db = config.readDB();
  const settings = SettingsAPI(config).read();
  expect(db.settings).toMatchObject(settings);
});

// Update
test('Should update app settings on database', () => {
  SettingsAPI(config).update({ settings: { fullscreen: true } });
  expect(config.readDB().settings.fullscreen).toBeTruthy();
  SettingsAPI(config).update({ settings: { fullscreen: false } });
  expect(config.readDB().settings.fullscreen).toBeFalsy();
});
