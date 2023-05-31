const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false // Disable node integration to ensure security
    },
    title: 'Onest HRM',
    backgroundColor: '#d3d3d3',
    icon: path.join(__dirname + 'assets/icons/png/64x64.png')
  });
  win.loadURL('https://hrm.onesttech.com/sign-in');

  // Open the DevTools (optional) 
  //   win.webContents.openDevTools();

win.webContents.on('did-finish-load', () => {
    // Adjust the window size based on screen dimensions
    const { width, height } = win.getContentBounds();

    const display = win.webContents.getOwnerBrowserWindow().getBounds();
    const screenWidth = display.width;
    const screenHeight = display.height;

    const newWidth = Math.floor(screenWidth * 0.8);
    const newHeight = Math.floor(screenHeight * 0.8);

    if (width > newWidth || height > newHeight) {
      win.setSize(newWidth, newHeight);
    }
  });

}

app.whenReady().then(createWindow);
