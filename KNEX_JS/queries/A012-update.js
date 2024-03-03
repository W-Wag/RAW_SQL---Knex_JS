/* UPDATE users SET last_name = 'DJ'
WHERE id = 99;
SELECT * FROM users u WHERE id = 99; */

const knex = require('../knex/config/database')

const select = knex('users').where('id', '=', '11')
const updateSQL = knex('users').update('last_name', 'Halls')
.update('salary', 4500)
.where('id', '=', 11)

console.log(updateSQL.toString())

updateSQL.then((data) => {
  console.log(data)
  select.then((data) => {
    console.log(data)
    
  }).catch(err => {
    console.error(err)
  })
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})