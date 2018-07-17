const fs = require('fs')

const { ipcMain } = require('electron')
module.exports = class Manager {

	/**
     * Load the handlers
     * @param {string} directory 
     */
	static load(directory) {
		/**
         * reads the directory
         */
		fs.readdir(directory, async (err, files) => {
			if(err) {
				throw err
			}
			/**
			 * Gets the no-extensions file name
			 * @type {Array}
			 */
			const handlers = await Manager.removeExtensions(files)
			/**
			 * Maps trought the handlers and require them
			 */
			handlers.map(dir => {
				/**
				 * @type {Object}
				 */
				const Handler = require(`${directory}/${dir}`)
				const H = new Handler()
				ipcMain.on(H.eventName, H.handle)
			})
		})
	}

	/**
	 * Removes the file extensions
	 * @param {Array} files 
	 */
	static removeExtensions(files) {
		return new Promise(async(resolve) => {
			/**
			 * filter the names
			 */
			const filenames = await Promise.all(files.map( f => f.replace('.js', '') ))
			 resolve(filenames)
		})
	}

}
