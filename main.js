'use strict'
// electron
const { app, BrowserWindow } = require('electron');

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 290,
        minWidth: 770,
        minHeight: 250,
    });
    
    //win.setMenu(null);
    win.loadURL(__dirname + '/public/index.html')

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