const { ipcMain } = require('electron')
const Logger = require('../../Logger')
const electron = require('electron')
module.exports = class UrlRequestHandler {

	/**
	 * constructeur de la classe
	 * @property {string} eventName
	 */
	constructor() {
		this.eventName = 'urlRequest'
	}

	/**
	 * Handles the ipc
	 * @param {Object} event 
	 * @param {Array} args 
	 */
	handle(event, {url, win}) {	
		event.sender.send('urlRequest', {url})
		Logger.log(`Sended ${url} to the view`, 'ok')
	}

}