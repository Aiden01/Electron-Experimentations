const path = require('path')
const url = require('url')
const Logger = require('./Logger')

module.exports = class Application {

    /**
     * Constructeur de la classe
     * @param {Electron.BrowserWindow} BrowserWindow 
     * @param {Electron.App}           app 
     * @param {Object}                 options
     * @param {number}                 options.width
     * @param {number}                 options.height
     * @param {string}                 options.title
     */
    constructor(BrowserWindow, app, options) {
        this.BrowserWindow = BrowserWindow
        this.app = app
        this.options = options
    }

    /**
     * Starts the application
     * @returns {void}
     */
    start() {
        this.app.on('ready', this.onReady.bind(this))
        this.app.on('window-all-closed', this.onAllClosed.bind(this))
    }

    /**
     * OnReady handler
     * @returns {void}
     */
    onReady() {
        Logger.log('Application started successfully', 'ok')
            /**
             * Initialisation de la fenêtre
             */
        this.window = new this.BrowserWindow({ width: this.options.width, height: this.options.height })
        this.window.loadURL(url.format({
                pathname: path.resolve(__dirname, 'src', 'dist', 'index.html'),
                protocol: 'file:',
                slashes: true
            }))
            /**
             * closed handler
             */
        this.window.on('closed', this.onClosed.bind(this))
    }

    /**
     * OnClosed handler
     * @returns {void}
     */
    onClosed() {
        Logger.log('Application closed successfully', 'ok')
        this.window = null
    }

    /**
     * on window all close handler
     */
    onAllClosed() {
        if (process.platform !== 'darwin') {
            this.app.quit()
        }
    }

}