import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

let mainWindow: BrowserWindow;

app.on("ready", createWindows);

function createWindows(): void {
  mainWindow = new BrowserWindow({
    width: 900, height: 600,
    webPreferences: {
      preload: __dirname + "/preload.js"
    },
    show: false
  });

  mainWindow.loadFile("./index.html");
  mainWindow.on("ready-to-show", () => mainWindow.show());
}