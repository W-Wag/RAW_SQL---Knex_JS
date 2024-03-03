/* 
SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u
LEFT JOIN profiles p
ON u.id = p.user_id;
 */

const knex = require('../knex/config/database')

const leftJoin = knex('users as u')
.select('u.id as uid', 'p.id as pid', 
'p.bio', 'u.first_name')
.leftJoin('profiles as p', 'u.id', 'p.user_id')
.whereILike('u.first_name', '%a')
.orderBy('u.first_name', 'desc')
.limit(5)


console.log(leftJoin.toString())

leftJoin.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})