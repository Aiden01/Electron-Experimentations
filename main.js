
const { app, BrowserWindow } = require('electron')
require('./providers/communication/ipc')



const Application = require('./Application')
const ElectronApp = new Application(BrowserWindow, app, { width: 722, height: 769 })



ElectronApp.start()
