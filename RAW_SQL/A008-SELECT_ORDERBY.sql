SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY created_at ASC; 

SELECT id, first_name, email from users u 
WHERE id BETWEEN 50 AND 90 
ORDER  BY id ASC, first_name DESC; 