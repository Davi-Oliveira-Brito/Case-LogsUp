DROP DATABASE IF EXISTS LogsUp;
CREATE DATABASE IF NOT EXISTS LogsUp;
USE LogsUp;

CREATE TABLE tb_admin (
	id_admin		INT AUTO_INCREMENT PRIMARY KEY,
    nome_admin	VARCHAR(100) NOT NULL,
    email_admin	VARCHAR(100) NOT NULL,
    senha_admin	VARCHAR(50)  NOT NULL
);

CREATE TABLE tb_usuario (
	id_usuario			INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario		VARCHAR(100) NOT NULL,
    email_usuario		VARCHAR(100) NOT NULL,
    senha_usuario		VARCHAR(50)  NOT NULL,
    permissao_usuario	INT
);

CREATE TABLE tb_produto (
	id_produto				INT AUTO_INCREMENT PRIMARY KEY,
	nome_produto 			VARCHAR(100) NOT NULL,
    descricao_produto 		VARCHAR(100) NOT NULL,
    preco_produto			DECIMAL(10,2)NOT NULL,
    quantidade_produto		INT NOT NULL,
    datacriacao_produto		DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_usuario				INT NOT NULL,
    FOREIGN KEY(id_usuario) REFERENCES tb_usuario(id_usuario)
);





