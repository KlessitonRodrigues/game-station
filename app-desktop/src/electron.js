const { app, BrowserWindow } = require('electron');
require('electron-reload')('./dist');

const createWindow = () => {
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
};

app.whenReady().then(() => {
  createWindow();
});
