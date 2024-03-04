/* 
-- Configura um salário aleatório para users
UPDATE users SET salary = ROUND( RAND() * 10000, 2);

SELECT first_name, salary from users u  
WHERE  salary  BETWEEN 100 AND 1500 
ORDER  BY  salary  ASC;
*/

const knex = require('../knex/config/database')

const randRound = knex('users').update(
  'salary', knex.raw('round(rand() * 10000, 2)')
).whereBetween('id', [9,16])

const select = knex('users').whereBetween('id', [9,16])

console.log(randRound.toString())

select.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})