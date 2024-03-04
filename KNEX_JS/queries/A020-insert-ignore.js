/* 
-- INSERT IGNORE: ignora os erros

INSERT IGNORE INTO users_roles (user_id, roles_id)
SELECT id,
(SELECT  id FROM roles ORDER BY RAND() LIMIT 1)
as qualquer from users u ORDER BY RAND() LIMIT 5; */


const knex = require('../knex/config/database')

const insertUserRoles = knex(
  knex.raw('users_roles (user_id, role_id)')
)
.insert(qb => {
  qb.select('id').from('users').select(qb => {
    qb.select('id').from('roles').orderByRaw('rand()').limit(1).as('qualquer')
  })
})
const insertIgnore = knex.raw(insertUserRoles.toString().replace('insert', 'insert ignore'))
console.log(insertIgnore.toString())

insertIgnore.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})