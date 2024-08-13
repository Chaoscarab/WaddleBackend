const pool = require('./dbConnection')

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



module.exports = {dbQuery}