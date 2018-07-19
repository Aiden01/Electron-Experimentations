const path = require('path')
const Manager = require('./Manager')

/**
 * register the handlers
 */
Manager.load(path.resolve(__dirname, 'handlers'))