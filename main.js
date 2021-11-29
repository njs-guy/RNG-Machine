const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1100,
        height: 600,
        icon: path.join(__dirname, "./build/r_icon.png"),
        webPreferences: {
            nodeIntegration: true
        },
        
    });

    mainWindow.loadURL(
        url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file",
        slashes: true
        })
       );

    
    mainWindow.setMenu(null);
}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});