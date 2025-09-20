import { AddProduto, EditarProduto, ExcluirProduto, BuscarUsuario, MostrarProdutos } from '../repository/ProdutoRepository.js'

import { Router } from 'express';
const server = Router();

server.post('/usuario/produto/cadastrar', async (req, resp) => {
    try {
        console.log("asa")
        const { produto, usuario } = req.body;
        const usuarioDb = await BuscarUsuario(usuario.id)
        if (usuarioDb.length === 0 && (usuario.permissao == 0 || usuario.permissao == 1)) {

            if (typeof (produto.nome) !== 'string' || !produto.nome || produto.nome.length <= 2 || produto.nome.length > 100)
                throw new Error('Digite um nome valido');

            if (typeof (produto.descricao) !== 'string' || !produto.descricao || produto.descricao.length <= 2 || produto.descricao.length > 100)
                throw new Error('Digite uma descrição valida!');

            if (!produto.preco || typeof (produto.preco) !== 'number' || produto.preco <= 0)
                throw new Error('Digite um preco valido!');

            if (!produto.quantidade || !Number.isInteger(produto.quantidade) || produto.quantidade <= 0)
                throw new Error('Digite uma quantidade valida!');

            const insertedId = await AddProduto(produto, usuario);
            resp.send(insertedId);

        } else
            return resp.status(404).send({ erro: "Usuário não encontrado ou não tem Permissão" });

    } catch (error) {
        console.error(error);
        resp.status(500).send({ erro: error.message });
    }
});

server.put('/usuario/produto/editar', async (req, resp) => {
    try {
        const { produto, usuario } = req.body;
        const usuarioDb = await BuscarUsuario(usuario.id)
        if (usuarioDb.length === 0 || usuario.id > 0 && usuario.permissao == 1) {
            if (typeof (produto.nome) !== 'string' || !produto.nome || produto.nome.length <= 2 || produto.nome.length > 100)
                throw new Error('Digite um nome valido');

            if (typeof (produto.descricao) !== 'string' || !produto.descricao || produto.descricao.length <= 2 || produto.descricao.length > 100)
                throw new Error('Digite uma descrição valida!');

            if (!produto.preco || typeof (produto.preco) !== 'number' || produto.preco <= 0)
                throw new Error('Digite um preco valido!');

            if (!produto.quantidade || !Number.isInteger(produto.quantidade) || produto.quantidade <= 0)
                throw new Error('Digite uma quantidade valida!');

            const result = await EditarProduto(produto, usuario);
            resp.send({ mensagem: "Produto editado com êxito!" });
        } else
            return resp.status(404).send({ erro: "Usuário não encontrado ou não tem Permissão" });

    } catch (error) {
        resp.status(500).send({ erro: error.message });
    }
});

server.delete('/usuario/produto/:id/deletar', async (req, resp) => {
    try {
        console.log('tst')
        const { id } = req.params;        
        const { usuario } = req.body;    
        const usuarioDb = await BuscarUsuario(usuario.id)
        if (usuarioDb.length === 0 || !usuario || !usuario.id || usuario.permissao !== 1) {
            return resp.status(403).send({ 
                erro: "Usuário não encontrado ou não tem permissão" 
            });
        }

        const resultado = await ExcluirProduto(id, usuario);

        if (resultado.affectedRows === 0) {
            return resp.status(404).send({
                erro: "Produto não encontrado ou você não tem permissão para deletá-lo"
            });
        }

        resp.send({ mensagem: "Produto excluído com sucesso!" });

    } catch (error) {
        console.error(error);
        resp.status(500).send({ erro: "Erro ao excluir produto" });
    }
});

server.get('/usuario/produtos', async (req, resp) =>{
    try{
        const id = req.body
        const resposta = await MostrarProdutos();
        resp.status(200).send(resposta)
    } catch (error){
        resp.status(404).send({
            error:error.message
        })
    }
})

export default server;