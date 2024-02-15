-- SUB QUERIES: permite fazer duas queries 
-- na mesma linha

INSERT INTO users_roles  (user_id, roles_id)
VALUES (12, 4);

SELECT user_id, roles_id FROM users_roles ur  WHERE 
user_id = 12 AND roles_id = 4;

SELECT id, 
(SELECT  id FROM roles ORDER BY RAND() LIMIT 1)
as qualquer from users u;

INSERT INTO users_roles (user_id, roles_id)
SELECT id, 
(SELECT  id FROM roles ORDER BY RAND() LIMIT 1)
as qualquer from users u;
