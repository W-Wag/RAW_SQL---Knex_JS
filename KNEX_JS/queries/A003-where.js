/* SELECT * FROM  users
WHERE id!=2;

SELECT * FROM users u 
WHERE created_at  > '2024-01-23 13:12:35';

SELECT * FROM users u 
WHERE created_at  > '2024-01-23 13:12:35' AND first_name = 'Romario'; */

/* SELECT email, id, first_name  FROM users u; */

const knex = require('../knex/config/database')


const where = knex('users as u').select('*').where('id', '=', 8).andWhere('first_name', '=', 'Sergio');

where.then(data => {
 console.log(data)
}).catch(err => {
  console.log(err.message)
}).finally(() => {
  knex.destroy()
})