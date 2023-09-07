export const gameInfoObj = (): AppDB.Models.GameInfo => ({
  name: 'game-name',
  publisher: 'publisher-name',
  year: 'game-year',
  background: 'img-url',
  cover: 'img-url',
  description: 'game-description',
  addedAt: 'added-at-timer',
  rate: 'game-rate',
  hidden: false,
  gameFile: '',
  gamePath: '',
});

export const settingsInfoObj = (): AppDB.Models.SettingsInfo => ({
  bgOption: 'red',
  fullscreen: false,
});
