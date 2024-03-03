/* SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u, profiles p
WHERE u.id = p.user_id;

SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u
INNER JOIN profiles p
ON u.id = p.user_id; */

const knex = require('../knex/config/database')

const innerJoin = knex('users as u')
.select('u.id as uid', 'p.id as pid', 
'p.bio', 'u.first_name')
.innerJoin('profiles as p', 'u.id', 'p.user_id')
.whereILike('u.first_name', '%a')
.orderBy('u.first_name', 'desc')
.limit(5)

console.log(innerJoin.toString())

innerJoin.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})