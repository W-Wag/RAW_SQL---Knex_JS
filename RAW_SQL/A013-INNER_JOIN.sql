SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u, profiles p
WHERE u.id = p.user_id;

SELECT u.id uid, p.id pid, 
p.bio, u.first_name FROM users u
INNER JOIN profiles p
ON u.id = p.user_id;