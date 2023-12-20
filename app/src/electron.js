const { app, BrowserWindow, globalShortcut } = require('electron');
const { readFileSync } = require('fs');
const { join } = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const appPath = join(__dirname, '../dist/index.html');

  try {
    readFileSync(appPath);
    console.log('Loading App from ./dist/');
    win.loadFile(appPath);
    win.setFullScreen(true);
  } catch (error) {
    console.log('Loading App from localhost:8080');
    win.loadURL('http://localhost:8080');
  }

  const ret = globalShortcut.register('Control+f6', () => {
    console.log('CommandOrControl+f6 is pressed');
  });

  if (!ret) console.log('registration failed');
});
