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

