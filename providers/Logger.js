
const ascii = require('ascli')(process.env.APP_NAME)

module.exports = class Logger {

	/**
     * 
     * @param {string} msg Message a logger
     * @param {string} color Couleur du message
     */
	static log(msg, type) {
		if(process.env.NODE_ENV === 'dev') {
			ascii[type](msg)
		}
	}

}