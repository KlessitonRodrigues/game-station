const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("dist/index.html");
  win.setFullScreen(true);
};

app.whenReady().then(() => {
  createWindow();
});
