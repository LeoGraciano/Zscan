-- BASE POSTGRES
CREATE EXTENSION pgcrypto;
-- 4.a
SELECT * FROM users u

INNER JOIN groups p ON u.id = g.users_id
WHERE MONTH(u.created) IN (1) AND g.id IN (15, 40)
-- 4.b
-- NÃO TIVE UMA DESCRIÇÃO MUITO COMPLETA NESSE QUESTÃO AUTHENTICAÇÃO DE QUE ? LGOIN ? ACESSO A PAGINA ? 
CREATE OR REPLACE FUNCTION validate_user(pass_send text, pass_db text)
RETURNS boolean AS $$
BEGIN
	RETURN  ((select encode(digest(pass_send, 'sha1'), 'hex')) = pass_db);
END;
$$ LANGUAGE plpgsql;

SELECT
u.id,
u.login,
u.name,
(SELECT validate_user(u.password, u.password)) AS is_auth,
(SELECT encode(digest(u.name, 'sha1'), 'hex'))

FROM 
users u 

CREATE OR REPLACE FUNCTION func_hash(pass_send text)
RETURNS text AS $$
BEGIN
	RETURN  (SELECT encode(digest(pass_send, 'sha1'), 'hex'))
END;
$$ LANGUAGE plpgsql;

-- 4.c

CREATE FUNCTION insert_grupo_function() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
    IF OLD.id IS NULL THEN
        insert into users_groups
        select u.id, g.id
        from   users u
        left join lateral (select id from groups where id in (20, 33)) g on true
        where  u.id in (NEW.id);
	RETURN NEW;
END;
$$

CREATE OR REPLACE TRIGGER insert_grupo_trigger 
    AFTER UPDATE
    ON users 
    FOR EACH STATEMENT 

EXECUTE PROCEDURE insert_grupo_function


INSERT INTO users(logon, password_, name, created) VALUES ("usuário", (SELECT func_hash("password@123")), "Usuário");

-- 4.d

SELECT 
*
FROM users u

INNER JOIN user_groups ug ON u.id = up.users_id
INNER JOIN permisions p ON up.groups_id = p.groups_id
WHERE p.id in (55,80 e 48)


-- 4.e
TRUNCATE TABLE users, gruops, permissions CASCADE;
