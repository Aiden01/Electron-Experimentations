const fs = require('fs')

const { ipcMain } = require('electron')
const path = require('path')
const Logger = require('../../Logger')
module.exports = class Manager {

	/**
     * @property {Map} handlers
     */
	constructor() {
		this.handlers = new Map()
	}

	/**
     * @description Load the handlers
     */
	load() {
		ipcMain.on('message', (event, { channel, args }) => {
			if (this.handlers.has(channel)) {
				Logger.log(`Received new message at channel ${channel}, Arguments: ${args}`, 'ok')
				const handler = this.handlers.get(channel)
				handler(event, args)
			} else {
				Logger.log(`Received new message at channel ${channel}, this channel matches with nothing.`, 'fail')
			}
		})
	}

	/**
     * @description Adds a new handler
     * @param {String} name The name of the event
     * @param {Object} handler The object of the handler
     */
	addHandler(name, handler) {
		if (typeof handler !== 'function') throw new Error('function')
		this.handlers.set(name, handler)
	}

}