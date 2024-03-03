/* 
-- INSERT IGNORE: ignora os erros

INSERT IGNORE INTO users_roles (user_id, roles_id)
SELECT id,
(SELECT  id FROM roles ORDER BY RAND() LIMIT 1)
as qualquer from users u ORDER BY RAND() LIMIT 5; */