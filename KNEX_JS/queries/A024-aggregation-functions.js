/* 
-- Funções de agregação

SELECT 
MAX(salary) max_salary,
MIN(salary) min_salary,
AVG(salary) avg_salary,
SUM(salary) sum_salary,
COUNT(salary) count_salary
FROM users u;

SELECT u.first_name,
MAX(salary) max_salary,
MIN(salary) min_salary,
AVG(salary) avg_salary,
SUM(salary) sum_salary,
COUNT(u.id) total
FROM users u
LEFT JOIN profiles p 
ON p.user_id = u.id
WHERE first_name = 'Giacomo'
GROUP BY first_name
ORDER BY total  DESC;
 */

const knex = require('../knex/config/database')

const aggregation = knex('users')
.max('salary as max_salary')
.min('salary as min_salary')
.avg('salary as avg_salary')
.sum('salary as sum_salary')
.count('salary as total')


console.log(aggregation.toString())

aggregation.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})