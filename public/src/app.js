
const { BrowserWindow } = require('electron').remote
const { ipcRenderer } = require('electron')
const url = require('url')

const Form = document.getElementById('main-form')

let win = new BrowserWindow({width: 700, height: 700})



win.on('closed', () => {
	win = null
})

win.loadURL(`file://${__dirname}/url.html`)

Form.addEventListener('submit', (e) => {
	e.preventDefault()
	const url = e.target.querySelector('input[name="url"]').value
	ipcRenderer.send('urlRequest', {url})
})

ipcRenderer.on('urlRequest', (event, args) => {
	win.webContents.send('urlRequest', args)
})