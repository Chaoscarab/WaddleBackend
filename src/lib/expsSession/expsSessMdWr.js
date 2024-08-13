const expresssession = require('express-session')
const MySQLStore = require('express-mysql-session')(expresssession);
const pool = require("../../db/dbConnection")

//move to config file
const oneday = 1000 * 60 * 60 * 24


const sessionStore = new MySQLStore({
    createDatabaseTable: true,
  }, pool)

const expressSession = expresssession({
    secret: 'thisismykey',
    store: sessionStore,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: oneday},
    resave: false
    })


module.exports= {expressSession}

