const dbQuery = require('C:\\Users\\brand\\waddledev3\\src\\db\\dbQuery.js')

async function deserialize(userobj){

    console.log('serialize', userobj)
  
  
    const query = `SELECT * from users where id = ?`

    const params = [userobj.id]
  
          try {

            const results = await dbQuery.dbQuery.execute(query, params)

            const datatype = typeof results[0][0]

            if (datatype !== 'object'){

                return {user: 'not Serialized'}

            }else{

                return JSON.parse(results[0][0].id)
            }

          }catch{

            console.log('error in serialization:', error)

          }

        }

module.exports = {deserialize}