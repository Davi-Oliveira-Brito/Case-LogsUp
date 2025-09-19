SELECT * FROM tb_admin;
SELECT * FROM tb_user;
SELECT * FROM tb_produto;

-- ADMIN:

	-- Logon
INSERT INTO tb_admin(nome_admin, email_admin, senha_admin)
			   value('','','');
               
	-- Fornecimento de Permissão ao User:
UPDATE tb_user
SET permissao_user = 0
WHERE id_user = 0;



-- USER:

	-- Logon
INSERT INTO tb_user(nome_user, email_user, senha_user)
			  value('','','');
              
     -- Login         
SELECT 	id_user			AS Id,			
		nome_user		AS Nome,  		
        email_user 		AS Email, 		
        permissao_user	AS Permissão
FROM tb_user
WHERE email_user = '' AND senha_user = '' AND permissao_user IS NOT NULL;

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


























