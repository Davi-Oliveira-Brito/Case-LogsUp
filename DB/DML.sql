SELECT * FROM tb_admin;
SELECT * FROM tb_usuario;
SELECT * FROM tb_produto;

-- ADMIN:

	-- Logon
INSERT INTO tb_admin(nome_admin, email_admin, senha_admin)
			   value('','','');
               
	-- Fornecimento de Permissão ao User:
UPDATE tb_usuario
SET permissao_usuario = 10
WHERE id_usuario = 1;


-- USER:

	-- Logon
INSERT INTO tb_user(nome_usuario, email_usuario, senha_usuario)
			  value('Davi','d@gmail.com','1234');
              
     -- Login         
SELECT 	id_usuarior			AS Id,			
		nome_usuario		AS Nome,  		
        email_usuario 		AS Email, 		
        permissa_usuario	AS Permissão
FROM tb_user
WHERE email_user = 'pholiveirabrito@hotmail.com' AND senha_user = 'Pedro2000' AND permissao_user IS NOT NULL AND permissao_user < 2;

	-- Inserção de Produto 
INSERT INTO tb_produto (nome_produto, descricao_produto, preco_produto, quantidade_produto, id_usuario)
				  value('','', 0.0 , 0, 0);
                  
	-- Busca de Produto
SELECT 	id_produto			AS Id,
		nome_produto		AS Nome,
		descricao_produto	AS Descrição,
		preco_produto		AS Preço,
		quantidade_produto	AS Quantidade,
		datacriacao_produto AS 'Data de Criação'
FROM tb_produto;
	
    -- Atualização de Produto
UPDATE tb_produto
SET nome_produto = '',
	descricao_produto = '',
    preco_produto = 0.0,
    quantidade_produto = 0
WHERE id_produto = 0;

	-- Exclusão do Produto
DELETE FROM tb_produto
WHERE id_produto = 0;


























