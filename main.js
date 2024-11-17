const { app, BrowserWindow, ipcMain } = require('electron/main')
const { ChildProcess } = require('node:child_process')
const { platform } = require('node:os')
const {SetIndexIpcMain} = require('./js-node/index-node.js')
const path = require('node:path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('html/index.html')
}

app.whenReady().then(() => {

  isGitInstalled();
  createWindow()

  SetIndexIpcMain();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

function isGitInstalled()
{
  require('child_process').exec('git --version', (error, stdout, stderr) => {
    if (error) {
      console.log('Git is not installed. Please install it and try again.');
      process.exit(1);
    } else {
      console.log('Git is installed.');
    }
  });
}


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

