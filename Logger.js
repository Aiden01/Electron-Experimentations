const ascii = require('ascli')(process.env.APP_NAME),
    fs = require('fs'),
    log = require('log'),
    FileLogger = new log('info', fs.createWriteStream('./logs/stdout.log'))


module.exports = class Logger {

    /**
     * 
     * @param {string} msg Message a logger
     * @param {string} color Couleur du message
     */
    static log(msg, type) {
        if (process.env.NODE_ENV === 'dev') {
            FileLogger[this.convert(type)](msg)
            ascii[type](msg)
        }
    }

    static convert(type) {
        switch (type) {
            case "ok":
                return "info"
                break;
            case "fail":
                return "error"
                break;
        }
    }

}