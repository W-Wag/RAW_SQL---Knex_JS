/* SELECT * FROM users u 
WHERE created_at  < '2021-07-25 22:12:26'
AND created_at > '2020-06-12 14:52:39';

SELECT * FROM users u 
WHERE created_at  BETWEEN '2020-06-12 00:00:00'  
AND '2021-07-25 23:59:59';

SELECT  * FROM  users u 
WHERE id BETWEEN 40 AND 90; */

const knex = require('../knex/config/database')
const selectBetween = knex('users')
.select('id', 'first_name')
.whereBetween('id', [40, 45])
.orWhereBetween('id', [10, 15])

// console.log(selectBetween.toString())

selectBetween.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})