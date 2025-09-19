import { login, logon } from '../repository/UserRepository.js'

import { Router } from 'express'; 
const server = Router();

server.post('/user/logon', async (req, resp) => {
    try {
        const usuario = req.body;
        if(typeof(usuario.nome)  !== 'string' || !usuario.nome || usuario.nome.length <= 2 || usuario.nome.length > 100) 
            throw new Error('Digite um nome valido');

        if(typeof(usuario.email ) !== 'string' || !usuario.email || usuario.email.length > 100) 
            throw new Error('Digite um email valido!');
            
        if(!usuario.senha) 
            throw new Error('Digite uma senha valida!');
        
        const insertedId = await logon(usuario); 
        resp.send(insertedId);

    } catch (error) {
        resp.status(401).send({
            x: error.message
        });
    }

})



server.post('/user/login', async (req, resp) => {
    try {
        const usuario = req.body;
        const resposta = await login(usuario);

        if (!usuario.email || !usuario.senha)
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

export default server;