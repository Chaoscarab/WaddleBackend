let dbQuery = require('../../../db/dbQuery')

async function getInfo(username, password, done){
        //sql query string
                const query = "SELECT * from users where username = ? " 

               const params = [username]
      

        try{ 
              //waits for the database search to complete

        const results = await dbQuery.dbQuery(query, params)
     
        let datatype = typeof results[0][0]

        if(datatype !== 'object'){

            return done(null, false)

        }
                console.log(results[0][0].username)

        if(results[0][0].username !== username){

            console.log(results[0][0].user)

            return done(null, false)
        }
        if(results[0][0].password !== password){

            return done(null, false)
        }
        
        return done(null, results[0][0])

    }catch{

        console.error('error in GetInfo', error)

    }
              }

module.exports = {getInfo}
    