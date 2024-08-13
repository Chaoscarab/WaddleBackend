//libraries
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

//modules
const ExpressSession = require('./src/lib/expsSession/expsSessMdWr')
const psptMdWr = require('./src/lib/passport/psptMdWr')

const {  logErrorMiddleware, returnError } = require('./ErrorHandling/EHmodules')


//routes
//const routes = require('./src/routes/routes')



//initializing app related stuff
const app = express()

app.use(express.static(path.join(__dirname, "client", 'public' )))

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



//express-session with options
app.use(ExpressSession.expressSession)


//express
app.use(express.json())

app.use(express.urlencoded({extended: true }))

//passport.initialize() and passport.session()
app.use(psptMdWr.psptInit)

app.use(psptMdWr.psptSession)

require('./src/lib/passport/psptSerDeser')



app.get('*', async function(req, res, next){
    try {
        res.sendFile(path.join(__dirname, "client", 'public', 'index.html'))    
    }catch (error){

        next(error)
        
    }

})


app.use(logErrorMiddleware)
app.use(returnError)

app.listen(process.env.PORT)
