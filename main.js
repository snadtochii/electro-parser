'use strict'
// electron
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

let win = null;
const defaultWinOptions = {
    width: 1280,
    height: 275,
    minWidth: 500,
    minHeight: 250
};
let winOptions;

function createWindow() {
    try {
        winOptions = JSON.parse(fs.readFileSync(__dirname + '/win.config.json'));
    }
    catch (er) {
        // throw er
    }
    if (!winOptions) {
        winOptions = defaultWinOptions;
    }
    win = new BrowserWindow({
        width: winOptions.width,
        height: winOptions.height,
        minWidth: winOptions.minWidth,
        minHeight: winOptions.minHeight,
    });

    win.setMenu(null);
    win.loadURL(__dirname + '/public/index.html')

    win.on('close', () => {
        let size = win.getSize();
        winOptions.width = size[0];
        winOptions.height = size[1];
        fs.writeFileSync(__dirname + '\\win.config.json', JSON.stringify(winOptions));
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