import { con } from './connection.js';

// Query Para Inserir Produto
export async function AddProduto(produto, usuario) {
    const comando = `
    INSERT INTO tb_produto (nome_produto, descricao_produto, preco_produto, quantidade_produto, id_usuario)
				     VALUES(?,?,?,?,?);
    `

    const [resposta] = await con.query(comando, [produto.nome, produto.descricao, produto.preco, produto.quantidade, usuario.id]);
    return resposta.insertId;
}

export async function EditarProduto(produto, usuario) {
    const comando = `
    UPDATE tb_produto
    SET nome_produto = ?,
	    descricao_produto = ?,
        preco_produto = ?,
        quantidade_produto =?
    WHERE id_produto = ?;
    `
    const [resposta] = await con.query(comando, [produto.nome, produto.descricao, produto.preco, produto.quantidade, produto.id, usuario.id]);
    return resposta
}

export async function ExcluirProduto(id, usuario) {
    const comando = `
    DELETE FROM tb_produto
    WHERE id_produto = ?;
    `

    const [resposta] = await con.query(comando, [id, usuario.id]);
    return resposta
}

export async function BuscarUsuario(id) {
    const comando = `
    SELECT * FROM tb_usuario
    WHERE id_usuario = ?;
    `;
    const [resposta] = await con.query(comando, [id]);
    return resposta;
}

export async function MostrarProdutos(id) {
    const comando = `
    SELECT 	id_produto			AS Id,
		    nome_produto		AS Nome,
		    descricao_produto	AS Descrição,
		    preco_produto		AS Preço,
		    quantidade_produto	AS Quantidade,
		    datacriacao_produto AS 'Data de Criação'
    FROM tb_produto;
    `

    const [resposta] = await con.query(comando, [id])
    return resposta
}