const { ipcRenderer } = require('electron')
ipcRenderer.send('osInfoRequest')

ipcRenderer.on('osInfoRequest', (event, args) => {
    console.log(args)
})