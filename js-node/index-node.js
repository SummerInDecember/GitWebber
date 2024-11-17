const {ipcMain} = require('electron/main');

function SetIndexIpcMain()
{
    ipcMain.on('wentBack', (event) => {
        console.log("back");
    });

    ipcMain.on('wentForth', (event) => {
        console.log("Forth");
    });

    ipcMain.on('enteredSearch', (event, search) => {
        console.log(search);
    });
}

module.exports = {SetIndexIpcMain};