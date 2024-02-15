-- LIKE (parecido)
-- % qualquer coisa
-- _ um caractere

SELECT * FROM users u 
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
WHERE first_name LIKE '_____';