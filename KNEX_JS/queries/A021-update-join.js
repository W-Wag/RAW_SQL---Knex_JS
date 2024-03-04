/* 
SELECT u.first_name, p.bio FROM users u
JOIN profiles p 
ON p.user_id = u.id
WHERE u.first_name = 'Katelyn';

UPDATE users u
JOIN profiles p 
ON p.user_id = u.id
SET p.bio = CONCAT(p.bio, ' atualizado') 
WHERE u.first_name = 'Katelyn'; */

const knex = require('../knex/config/database')

const updateJoin = knex('users as u')
.join('profiles as p', 'u.id', 'p.user_id')
.update({
  'p.bio': knex.raw('CONCAT(??, " atualizado")', ['p.bio'])
})
.where({
  'u.first_name': 'Meireles'
})

console.log(updateJoin.toString())

updateJoin.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})