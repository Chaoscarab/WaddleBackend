require('dotenv').config()
const mysql = require('mysql2')
const expresssession = require('express-session')
const express = require('express')
const MySQLStore = require('express-mysql-session')(expresssession);
const cors = require('cors')
const app = express()



//move to config file
const oneday = 1000 * 60 * 60 * 24


//create db connection pool
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




  async function dbQuery(query, arg){
    const sql = query
    const params = arg
   
    try{

      if(Array.isArray(arg) !== true){
        console.log('parameters are not an array dbQuery')
       throw (new Error('parameters are not an array dbQuery'))
      }
  
      if(typeof(query) !== 'string'){
        console.log('query is not a string, dbQuery')
        throw (new Error('query is not a string, dbQuery'))
      }

        const connection = await pool.promise().getConnection()
        console.log('connected')

      try{
         const rawResponse = await connection.execute(sql, params)
         console.log(rawResponse, 'rawResponse')
        }catch (e){
          e.message = `Function ${'dbquery'}/n${e.message}`
          console.log(e, 'second layer catch')
          throw(new Error(e))

        }finally{
          connection.release()
      }
    }catch (e){
      throw(new Error(e))
    }
  }



  const sessionStore = new MySQLStore({
    createDatabaseTable: true,
  }, pool)

app.use(expresssession({
    secret: 'thisismykey',
    store: sessionStore,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: oneday},
    resave: false
    }))

  app.use(express.json())
    app.use(express.urlencoded({extended: true }))

    app.use(cors({
      origin: "http://localhost",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
    );
    

app.get('/', (req, res) => {
  console.log(req.session)
  res.send('hello world')
})

app.listen(80)