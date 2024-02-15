-- IN seleciona elementos entre os valores enviados

SELECT * FROM  users u  
WHERE id=50 OR id=95 OR id=100; 

SELECT * FROM  users u  
WHERE id in (50,60,75,84,90,95); 

SELECT * FROM  users u  
WHERE id in (50,60,75,84,90,95)
AND first_name in ('zachery', 'barry', 'travis') ; 