const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    goBack: () => ipcRenderer.send('wentBack'),
    goForth: () => ipcRenderer.send('wentForth')
  })