/* SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY created_at ASC; 

SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC, first_name DESC;  */

const knex = require('../knex/config/database')

const orderBy = knex('users')
.select('id', 'first_name', 'created_At')
.whereILike('first_name', '%a')
.orWhereILike('first_name', '_a_o_')
.orderBy('id', 'desc')
.orderBy('created_At', 'asc')

// console.log(selectLike.toString())

orderBy.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})