/* INSERT INTO profiles
(bio, description, user_id)
SELECT CONCAT('Bio de ', first_name), 
CONCAT('Descrição de', ' ', first_name) , id from users; */

const knex = require('../knex/config/database')

const insertSelect = knex(
  knex.raw(
    '?? (??, ??, ??)',
  ['profiles', 'bio', 'description', 'user_id']
  )
).insert((qb) => {
  qb.from('users').select(
    knex.raw('concat("Bio de ", ??)',
    ['first_name']), 
    knex.raw('concat("Descrição de ", first_name)'), 
    'id')
}).whereNot('id', '=', '1')

// console.log(insertSelect.toString())

insertSelect.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})