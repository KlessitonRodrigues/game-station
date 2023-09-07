const { app, BrowserWindow, globalShortcut } = require('electron');
require('electron-reload')('./dist');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('../dist/index.html');
  win.setFullScreen(true);
  win.webContents.openDevTools();

  const ret = globalShortcut.register('Control+f6', () => {
    console.log('CommandOrControl+f6 is pressed');
  });

  if (!ret) {
    console.log('registration failed');
  }
});
