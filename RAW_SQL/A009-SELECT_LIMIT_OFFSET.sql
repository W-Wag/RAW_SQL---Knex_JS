-- limit limita a qtd de valores
-- offset desloca o curso de posição para exibir os resultados
SELECT id, first_name, email from users u 
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
LIMIT 6,3;

