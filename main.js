const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let window;

windowParams = {
  width: 1280,
  height: 720,
  show: true
};

app.on('ready', () => {
    window = new BrowserWindow(windowParams);
    window.loadURL(`file://${__dirname}/index.html`);
})
