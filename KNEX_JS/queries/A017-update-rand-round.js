/* 
-- Configura um salário aleatório para users
UPDATE users SET salary = ROUND( RAND() * 10000, 2);

SELECT first_name, salary from users u  
WHERE  salary  BETWEEN 100 AND 1500 
ORDER  BY  salary  ASC;
*/