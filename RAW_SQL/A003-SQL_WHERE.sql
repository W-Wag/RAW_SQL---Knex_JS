-- where filtra registros
-- igual maior igual ou menor igual --> = < <= > >= 
-- diferente --> <> !=
-- operadores lógicos AND e OR

SELECT * FROM  users
WHERE id!=2;

SELECT * FROM users u 
WHERE created_at  > '2024-01-23 13:12:35';

SELECT * FROM users u 
WHERE created_at  > '2024-01-23 13:12:35' AND first_name = 'Romario';