export const gameInfoObj = (): Models.GameInfo => ({
  name: 'game-name',
  publisher: 'publisher-name',
  year: 'game-year',
  background: 'img-url',
  cover: 'img-url',
  description: 'game-description',
  addedAt: 'added-at-timer',
  rate: 'game-rate',
  hidden: false,
  execultableName: '',
  folder: '',
});

export const settingsInfoObj = (): Models.SettingsInfo => ({
  bgOption: '',
  fullscreen: false,
});
