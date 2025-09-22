import { Router } from 'express';
import { login, logon,buscaUsuario } from '../../repository/User/UserRepository.js'
import { generateToken } from '../auth.js';

const server = Router();

server.post('/logon', async (req, resp) => {
    try {
        const usuario = req.body;

        if (!usuario.nome && !usuario.email && !usuario.senha)
            throw new Error('Complete os campos antes de prosseguir');

        if (typeof (usuario.nome) !== 'string' || !usuario.nome || usuario.nome.length <= 2 || usuario.nome.length > 100)
            throw new Error('Digite um nome valido');

        if (typeof (usuario.email) !== 'string' || !usuario.email || usuario.email.length > 100)
            throw new Error('Digite um email valido!');

        if (!usuario.senha)
            throw new Error('Digite uma senha valida!');
        const usuarioExiste = await buscaUsuario(usuario);
        if(usuarioExiste)
            throw new Error('Email ja Existente');
        
        const insertedId = await logon(usuario);
        resp.send(insertedId);

    } catch (error) {
        resp.status(401).send({
            r: error.message
        });
    }
})

server.post('/login', async (req, resp) => {
    try {
        const usuario = req.body;
        const resposta = await login(usuario);

        if (!usuario.email || !usuario.senha)
            throw new Error("Todos os campos são obrigatorios!");

        if (!resposta)
            throw new Error('Credenciais inválidas ou Usuario sem permissão');

        const jwt = generateToken(resposta);
        resp.send({ jwt })

    } catch (error) {
        resp.status(404).send({
            r: error.message
        });
    }
})

export default server;