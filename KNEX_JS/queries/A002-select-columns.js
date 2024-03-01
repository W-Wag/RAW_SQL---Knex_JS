/* SELECT email, id, first_name  FROM users u; */

const knex = require('../knex/config/database')


const select = knex('users as u').select('u.email as uemail', 'u.first_name as ufirst_name', 'u.id as uid');

select.then(data => {
  for (const user of data) {
    console.log(user)
  }
}).catch(err => {
  console.log(err.message)
}).finally(() => {
  knex.destroy()
})