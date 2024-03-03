/* SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC
LIMIT 3 OFFSET 0;

SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC
LIMIT 3 OFFSET 2;

SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC
LIMIT 3 OFFSET 4;

-- Também funciona assim sendo offset primeiro depois o limit

SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC
LIMIT 6,3; */

const knex = require('../knex/config/database')

const orderBy = knex('users')
.select('id', 'first_name')
.orderBy('id', 'desc')
.limit(5)
.offset(1)

// console.log(selectLike.toString())

orderBy.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})