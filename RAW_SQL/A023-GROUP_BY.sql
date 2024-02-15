-- GROUP BY: agrega os registros da tabela

SELECT first_name, COUNT(id) total FROM users u
GROUP BY first_name
ORDER BY total  DESC;

SELECT u.first_name, COUNT(u.id) total  FROM users u
LEFT JOIN profiles p 
ON p.user_id = u.id
WHERE u.id = 2
GROUP BY first_name
ORDER BY total  DESC
LIMIT 0,5;