-- insert select: insere valores em uma tabela usando outra

INSERT INTO profiles
(bio, description, user_id)
SELECT CONCAT('Bio de ', first_name), 
CONCAT('Descrição de', ' ', first_name) , id from users;