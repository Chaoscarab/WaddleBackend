const dotenv = require("dotenv")
dotenv.config({ path: "../../"})
const mysql = require('mysql2')


const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,

  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    ssl: { "rejectUnauthorized": true }
  })


module.exports = pool;
