import { Router } from 'express';
import { listarUsuarios, login, permissaoUsuario } from "../../repository/Admin/AdminRepository.js";
import { AdminPermission, generateToken, decodeToken } from '../auth.js';

const server = Router();

server.post('/login', async (req, resp) => {
    try {
        const admin = req.body;
        const resposta = await login(admin);

        if (!admin.email || !admin.senha)
            throw new Error("Todos os campos são obrigatorios!");

        if (!resposta)
            throw new Error('Credenciais inválidas ou Usuario sem permissão');

        const jwt = generateToken(resposta);
        resp.send({jwt})

    } catch (error) {
        resp.status(404).send({
            err: error.message
        });
    }
})

server.put('/:id/permissao', AdminPermission , async (req, resp) => {
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

server.get('/listar/usuarios', AdminPermission, async (req, resp) =>{
    try{
            const jwt = req.headers['adm-access-token']
            const usuario = decodeToken(jwt);
            if(usuario){
                const resposta = await listarUsuarios();
    
                resp.status(200).send(resposta)
            } else{
                resp.status(401)
            }
            
        } catch (error){
            resp.status(404).send({
                error:error.message
            })
        }
})


export default server;