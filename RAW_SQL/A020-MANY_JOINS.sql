-- Seleção de várias relações
SELECT u.id uid, u.first_name, p.bio, r.name 
FROM users u
LEFT JOIN profiles p ON u.id = p.user_id
INNER JOIN users_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.roles_id  = r.id
ORDER BY uid ASC;	 