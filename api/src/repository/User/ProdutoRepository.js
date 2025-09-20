import { con } from '../connection.js';

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

export async function ExcluirProduto(id) {
    const comando = `
    DELETE FROM tb_produto
    WHERE id_produto = ?;
    `

    const [resposta] = await con.query(comando, [id]);
    return resposta
}

export async function MostrarProdutos() {
    const comando = `
    SELECT 	id_produto			AS id,
		    nome_produto		AS nome,
		    descricao_produto	AS descricao,
		    preco_produto		AS preco,
		    quantidade_produto	AS quantidade,
		    datacriacao_produto AS datacriacao
    FROM tb_produto;
    `

    const [resposta] = await con.query(comando, [])
    return resposta
}