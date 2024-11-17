const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    goBack: () => ipcRenderer.send('wentBack'),
    goForth: () => ipcRenderer.send('wentForth'),
    enteredSearch: (search) => ipcRenderer.send('enteredSearch', search),
    changeFrame: () => ipcRenderer.invoke("changeFrame")
  })
