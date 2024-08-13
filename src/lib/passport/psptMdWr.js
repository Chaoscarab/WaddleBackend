let passport = require('passport')

let psptInit = passport.initialize()
let psptSession = passport.session()

module.exports = {psptInit, psptSession}