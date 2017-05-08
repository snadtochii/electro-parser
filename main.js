'use strict'
// electron
const { app, BrowserWindow } = require('electron');
const fs = require('fs-extra');
const path = require('path');

let win = null;
const defaultWinOptions = {
    width: 1280,
    height: 275,
    minWidth: 500,
    minHeight: 250,
    posX: 0,
    posY: 0
};
let winOptions;
const winConfigPath = 'C:\\AppData\\electro-parser\\win.config.json';

function createWindow() {
    try {
        winOptions = JSON.parse(fs.readFileSync(winConfigPath));
    }
    catch (er) {
        console.log(er);
        winOptions = defaultWinOptions;
    }

    win = new BrowserWindow({
        width: winOptions.width,
        height: winOptions.height,
        minWidth: winOptions.minWidth,
        minHeight: winOptions.minHeight,
    });
    win.setPosition(winOptions.posX, winOptions.posY);
    //win.setMenu(null);
    win.loadURL(path.join(__dirname, 'public/index.html'));

    win.on('close', () => {
        let size = win.getSize();
        let pos = win.getPosition();

        winOptions.width = size[0];
        winOptions.height = size[1];
        winOptions.posX = pos[0];
        winOptions.posY = pos[1];

        fs.outputJsonSync(winConfigPath, winOptions);
    });

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})