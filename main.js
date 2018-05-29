const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const createWindow = function () {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL('https://allo.google.com/web');
  mainWindow.on('closed', function() { mainWindow = null });
};

app.on('ready', createWindow);

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
