import { testConfig } from '../../../util/jest';
import { readSettings } from './index';

const config = testConfig();

test('Should read app settings from database', () => {
  const db = config.readDB();
  const settings = readSettings(config)();
  expect(db.settings).toMatchObject(settings);
});
