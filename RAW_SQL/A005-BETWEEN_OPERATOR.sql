-- between seleciona um range de datas e numeros

SELECT * FROM users u 
WHERE created_at  < '2021-07-25 22:12:26'
AND created_at > '2020-06-12 14:52:39';

SELECT * FROM users u 
WHERE created_at  BETWEEN '2020-06-12 00:00:00'  
AND '2021-07-25 23:59:59';

SELECT  * FROM  users u 
WHERE id BETWEEN 40 AND 90;