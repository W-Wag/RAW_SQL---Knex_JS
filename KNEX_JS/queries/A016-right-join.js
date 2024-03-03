/* 
SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u
RIGHT JOIN profiles p
ON u.id = p.user_id; */

const knex = require('../knex/config/database')

const rightJoin = knex('users as u')
.select('u.id as uid', 'p.id as pid', 
'p.bio', 'u.first_name')
.rightJoin('profiles as p', 'u.id', 'p.user_id')
.orderBy('u.id', 'asc')
.limit(3)

console.log(rightJoin.toString())

rightJoin.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})