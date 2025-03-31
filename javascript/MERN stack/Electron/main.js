console.log("Hello World");
import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    let win = new BrowserWindow();
    win.loadURL(new URL(`file://${path.join(__dirname, "index.html")}`).href);

    win.on("closed", () => {
        win = null;
    });
}

// Fix event handling
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
