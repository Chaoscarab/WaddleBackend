require('dotenv').config()
let mysql = require('mysql2')

const pool = mysql.createPool({
  host: process.env.DATABASE-HOST,
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
});


pool.query("SELECT * FROM activities", function(err, rows, fields) {
  console.log(err, rows, fields)
});