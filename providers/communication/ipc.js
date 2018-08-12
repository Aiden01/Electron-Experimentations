const path = require('path')
const M = require('./Manager')
const Manager = new M()
const OsInfoHandler = require('./handlers/OsInfosHandler')

/**
 * register the handlers
 */
console.log(typeof OsInfoHandler)
Manager.addHandler("os-info", OsInfoHandler)
Manager.load()