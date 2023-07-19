const testingGames: GameInfo[] = [
  {
    name: 'Forza Horizon 4',
    publisher: 'Playground Games',
    background: 'https://gamelegends.it/wp-content/uploads/2021/06/forza-horizon-4-1091.jpeg',
    cover: 'https://criticalhits.com.br/wp-content/uploads/2018/09/forza-horizon-4-cover.jpg',
    addedAt: '',
    description: '',
    hidden: false,
    rate: '',
    year: '',
  },
  {
    name: 'The elder scrolls V: Skyrim',
    publisher: 'Bathesda',
    background: 'https://getwallpapers.com/wallpaper/full/7/3/f/62923.jpg',
    cover:
      'https://th.bing.com/th/id/R.b78d05f2dabd5758d9e777e0f22105fb?rik=lEzrCiTm88AZBg&pid=ImgRaw&r=0',
    addedAt: '',
    description: '',
    hidden: false,
    rate: '',
    year: '',
  },
  {
    name: 'Follout 4',
    publisher: 'Bathesda',
    background: 'https://images.alphacoders.com/669/669271.jpg',
    cover: 'https://th.bing.com/th/id/OIP.5mnxlc8QM1umk9YuQa5_egHaLH?pid=ImgDet&rs=1',
    addedAt: '',
    description: '',
    hidden: false,
    rate: '',
    year: '',
  },
  {
    name: 'Follout New Vagas',
    publisher: 'Bathesda',
    background: 'https://images5.alphacoders.com/421/thumb-1920-421263.jpg',
    cover:
      'https://cdn1.epicgames.com/offer/3428aaab2c674c98b3acb789dcfaa548/EGS_FalloutNewVegas_ObsidianEntertainment_S2_1200x1600-866fe8b8f56e2e7bb862c49bf0627b9a',
    addedAt: '',
    description: '',
    hidden: false,
    rate: '',
    year: '',
  },
];

const testingSettings: SettingsInfo = {
  bgOption: 'linear-gradient(150deg,#00b8d4,#c51162 80%);',
  fullscreen: false,
};

export const testData = (config: DBConfig) => () => {
  const db = config.readDB();
  db.games = testingGames;
  db.settings = testingSettings;
  return config.saveDB(db);
};
