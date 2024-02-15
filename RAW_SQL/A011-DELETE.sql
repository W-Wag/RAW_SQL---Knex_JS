
-- DELETE apaga registros da tabela

DELETE FROM users WHERE id =1;

-- Aviso: use SELECT para garantir 
-- que está apagando os valores corretos
SELECT * FROM  users u WHERE id BETWEEN 1 and 9;
