/* SELECT * FROM users u 
WHERE first_name LIKE '%a';

SELECT * FROM users u 
WHERE first_name LIKE '%o';

SELECT * FROM users u 
WHERE first_name LIKE 'h%';

SELECT * FROM users u 
WHERE first_name LIKE 'he%';

SELECT * FROM users u 
WHERE first_name LIKE '%mo%';

SELECT * FROM users u 
WHERE first_name LIKE '%a%b%';

SELECT * FROM users u 
WHERE first_name LIKE '__co_';

SELECT * FROM users u 
WHERE first_name LIKE '_____'; */

const knex = require('../knex/config/database')
const selectLike = knex('users')
.select('id', 'first_name')
.whereILike('first_name', '%a')
.orWhereILike('first_name', '_a_o_')

// console.log(selectLike.toString())

selectLike.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})