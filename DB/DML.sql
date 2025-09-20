SELECT * FROM tb_admin;
SELECT * FROM tb_usuario;
SELECT * FROM tb_produto;


-- ADMIN:

	-- Logon
INSERT INTO tb_admin(nome_admin, email_admin, senha_admin)
			   value('Admin','admin@admin','0000');
               
    -- login           
SELECT	nome_admin	AS nome,
		email_admin	AS email,
        senha_admin	AS senha
FROM tb_admin
WHERE email_admin = '' AND senha_admin = '';

	-- Fornecimento de Permissão ao User:
UPDATE tb_usuario
SET permissao_usuario = 1
WHERE id_usuario = 1;


-- USER:

	-- Logon
INSERT INTO tb_usuario(nome_usuario, email_usuario, senha_usuario)
			  value('','','');
              
     -- Login         
SELECT 	id_usuario			AS id,			
		nome_usuario		AS nome,  		
        email_usuario 		AS email, 		
        permissao_usuario	AS permissao
FROM tb_usuario
WHERE email_usuario = '' AND senha_usuario = '' AND permissao_usuario IS NOT NULL AND permissao_usuario < 2;

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
WHERE id_produto = 1;


























