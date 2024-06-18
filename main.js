const { app, BrowserWindow } = require('electron');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false, // Optional: remove if you want a frameless window
        webPreferences: {
            nodeIntegration: true
        },
        backgroundColor: '#00000000',
        x: 100, // X coordinate
        y: 150, // Y coordinate
        alwaysOnTop: true // Make the window always on top
    });

    // Load the EJS file
    mainWindow.loadURL('http://localhost:5001/drawing');

    // Make the window click-through
    mainWindow.setIgnoreMouseEvents(true, { forward: true });

    // Make sure the window is always on top with 'screen-saver' priority
    mainWindow.setAlwaysOnTop(true, 'screen-saver');

    // Ensure the window stays on top when it loses and regains focus
    mainWindow.on('blur', () => {
        mainWindow.setAlwaysOnTop(true, 'screen-saver');
    });

    mainWindow.on('focus', () => {
        mainWindow.setAlwaysOnTop(true, 'screen-saver');
    });

    // Optional: Make sure the window is focused
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
}

app.on('ready', createWindow);
