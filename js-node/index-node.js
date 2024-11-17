const {ipcMain} = require('electron/main');
const fs = require('fs');
const { cwd } = require('process');
const searchEngineChar = "$";
const tempFolder = "/tmp/gitwebber";
function SetIndexIpcMain()
{
    ipcMain.on('wentBack', (event) => {
        console.log("back");
    });

    ipcMain.on('wentForth', (event) => {
        console.log("Forth");
    });

    /**
     * The "$" character will be used to use the search engine
     * I will implement
     */
    ipcMain.on('enteredSearch', (event, search) => {
        if(search.trim()[0] !== searchEngineChar)
        {
            cloneRepo(search.trim());
        }
    });
}

/**
 * This function assumes the pattern {accountName}-{repoName} 
 */
function cloneRepo(repo)
{
    let accountName = repo.substring(0, repo.indexOf('-'));
    let repoName = repo.substring(repo.indexOf('-') + 1);

    require('child_process').exec(`git clone https://github.com/${accountName}/${repoName}.git`, 
        {cwd: tempFolder}, (error, stdout, stderr) => {});

    ipcMain.handle("changeFrame", () => `${tempFolder}/${repoName}/index.html`);
}

module.exports = {SetIndexIpcMain};