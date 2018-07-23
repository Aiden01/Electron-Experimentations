const os = require('os')
module.exports = class OsInfoHandler {
    /**
     * @property {String} eventName 
     */
    constructor() {
        this.eventName = 'osInfoRequest'
    }

    /**
     * @param {Object} event 
     * @param {Array} args 
     */
    handle(event, args) {
        const informations = {
            totalMemory: Math.ceil(os.totalmem() / 1000000),
            freeMemory: Math.ceil(os.freemem() / 1000000),
            homeDir: os.homedir(),
            username: os.userInfo().username
        }
        event.sender.send('osInfoRequest', informations)
    }

}