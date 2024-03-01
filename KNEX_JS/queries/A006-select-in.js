/* SELECT * FROM  users u  
WHERE id=50 OR id=95 OR id=100; 

SELECT * FROM  users u  
WHERE id in (50,60,75,84,90,95); 

SELECT * FROM  users u  
WHERE id in (50,60,75,84,90,95)
AND first_name in ('zachery', 'barry', 'travis');  */

const knex = require('../knex/config/database')
const selectIn = knex('users')
.select('id', 'first_name')
.whereIn('id', [10,15,23,52])

// console.log(selectIn.toString())

selectIn.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})