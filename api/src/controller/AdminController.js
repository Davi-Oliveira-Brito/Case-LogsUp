import { login, permissaoUsuario } from "../repository/AdminRepository.js";

import { Router } from 'express';
const server = Router();

server.post('/admin/login', async (req, resp) => {
    try {
        const admin = req.body;
        const resposta = await login(admin);

        if (!admin.email || !admin.senha)
            throw new Error("Todos os campos são obrigatorios!");

        if (!resposta)
            throw new Error('Credenciais inválidas ou Usuario sem permissão');

        resp.send(resposta)

    } catch (error) {
        resp.status(404).send({
            err: error.message
        });
    }
})


server.put('/admin/:id/permissao', async (req, resp) => {
    try {
        const { id } = req.params;
        const { permissao } = req.body;

        if (permissao !== 0 && permissao !== 1) {
            return resp.status(400).send({ erro: "Permissão inválida. Use 0 ou 1." });
        }
        const result = await permissaoUsuario({ id, permissao });

        if (result.affectedRows === 0) {
            return resp.status(404).send({ erro: "Usuário não encontrado" });
        }

        resp.send({
            mensagem: "Permissão atualizada com sucesso",
            usuario: { id, permissao }
        });
    } catch (error) {
        resp.status(500).send({erro: error.message});
    }
});



export default server;