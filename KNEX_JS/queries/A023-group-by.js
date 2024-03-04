/* 
-- GROUP BY: agrega os registros da tabela

SELECT first_name, COUNT(id) total FROM users u
GROUP BY first_name
ORDER BY total  DESC;

SELECT u.first_name, COUNT(u.id) total  FROM users u
LEFT JOIN profiles p 
ON p.user_id = u.id
WHERE u.id = 2
GROUP BY first_name
ORDER BY total  DESC
LIMIT 0,5; */

const knex = require('../knex/config/database')

const groupBy = knex('users').select('first_name').count('id as total')
.groupBy('first_name')
.orderBy('total', 'desc')

const groupByJoin = knex('users as u')
.select('u.first_name')
.leftJoin('profiles as p', 'u.id', 'p.user_id')
.count('u.id as total')
.whereIn('u.id', [10, 25, 27, 54])
.groupBy('first_name')
.orderBy('total', 'desc')

console.log(groupByJoin.toString())

groupByJoin.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})