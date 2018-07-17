const { ipcRenderer } = require('electron')

ipcRenderer.on('urlRequest', (_, { url }) => {
	console.log('salut')
	const title = document.createElement('h1')
	title.innerHTML = url
	document.body.appendChild(title)
})