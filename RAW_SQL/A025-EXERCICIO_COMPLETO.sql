-- 1) Insira 5 usuários
	INSERT INTO users (first_name, last_name, email, password_hash, salary) 
	VALUES ('Rodrigo', 'Santoro', 'rodrigosan@email.com', 'asdasas7fsfg71asxzc', 9.975),
	('Serigo', 'Gross', 'serigog@email.com', 'asfsa124r2rf21w2rf1', 6.612),
	('Jonathan', 'Willians', 'wilianjon@email.com', 'asfasu12h12urb12', 7.898),
	('Menezes', 'Santos', 'santosmen@email.com', 'bausfsaguqbwrwq', 4.512),
	('Marcelo', 'Rodriges', 'marcelin@email.com', 'asfasrwrqfqwr', 1.224);

	SELECT u.id, first_name, p.bio, r.name FROM users u
	LEFT JOIN profiles p
	ON p.user_id = u.id
	LEFT JOIN users_roles ur
	ON u.id = ur.user_id
	INNER JOIN roles r 
	ON r.id = ur.roles_id
	WHERE u.id IN (104,105,106,107,108);
	
-- 2) Insira 5 perfís para os usuários inseridos
	INSERT INTO profiles (bio, description, user_id) 
	SELECT CONCAT('Bio de ', first_name), 
	CONCAT('Descrição de ', first_name), id FROM users
	WHERE id IN (104, 105, 106, 107, 108);  
-- 3) Insira permissões (roles) para os usuários inseridos
	INSERT IGNORE INTO users_roles (user_id, roles_id)
	SELECT id,
	(SELECT id from roles ORDER BY RAND() LIMIT 1 )
	FROM users u
	WHERE id IN (104, 105, 106, 107, 108);
-- 4) Selecione os últimos 5 usuários por ordem decrescente
	SELECT u.id, first_name, p.bio, r.name FROM users u
	LEFT JOIN profiles p
	ON p.user_id = u.id
	LEFT JOIN users_roles ur
	ON u.id = ur.user_id
	INNER JOIN roles r 
	ON r.id = ur.roles_id
	WHERE u.id IN (104,105,106,107,108)
	ORDER BY u.id DESC;
-- 5) Atualize o último usuário inserido
	UPDATE users SET first_name = 'Marcelinho'
	WHERE id = 108;
-- 6) Remova uma permissão de algum usuário
	SELECT u.id, first_name, r.name, ur.roles_id  FROM users u
	LEFT JOIN users_roles ur ON u.id = ur.user_id
	INNER JOIN roles r ON r.id = ur.roles_id
	WHERE u.id = 108;

	DELETE ur FROM users u
	LEFT JOIN users_roles ur ON u.id = ur.user_id
	INNER JOIN roles r ON r.id = ur.roles_id
	WHERE u.id = 108 AND r.name = 'DELETE';
	
-- 7) Remova um usuário que tem a permissão "PUT"
	SELECT u.id, first_name, r.name, ur.roles_id  FROM users u
	LEFT JOIN users_roles ur ON u.id = ur.user_id
	INNER JOIN roles r ON r.id = ur.roles_id
	WHERE u.id = 105;

	DELETE ur FROM users u
	LEFT JOIN users_roles ur ON u.id = ur.user_id
	INNER JOIN roles r ON r.id = ur.roles_id
	WHERE u.id = 105 AND r.name = 'PUT';
-- 8) Selecione usuários com perfís e permissões (obrigatório)
	SELECT u.id, first_name, p.bio, r.name FROM users u
	INNER JOIN profiles p
	ON p.user_id = u.id
	INNER JOIN users_roles ur
	ON u.id = ur.user_id
	INNER JOIN roles r 
	ON r.id = ur.roles_id
	WHERE u.id IN (104,105,106,107,108);
-- 9) Selecione usuários com perfís e permissões (opcional)
	SELECT u.id, first_name, p.bio, r.name FROM users u
	LEFT JOIN profiles p
	ON p.user_id = u.id
	LEFT JOIN users_roles ur
	ON u.id = ur.user_id
	INNER JOIN roles r 
	ON r.id = ur.roles_id
	WHERE u.id IN (104,105,106,107,108);
-- 10) Selecione usuários com perfís e permissões ordenando por salário
	SELECT u.id, first_name, p.bio, r.name, u.salary FROM users u
	LEFT JOIN profiles p
	ON p.user_id = u.id
	LEFT JOIN users_roles ur
	ON u.id = ur.user_id
	INNER JOIN roles r 
	ON r.id = ur.roles_id
	WHERE u.id IN (104,105,106,107,108)
	ORDER BY u.salary DESC;