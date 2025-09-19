import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import UserController from './controller/UserController.js';

const server = express();
server.use(cors());
server.use(express.json());

//Configuração dos Endpoints
server.use(UserController);

server.listen(process.env.PORT, () => console.log(`API Conectada na porta ${process.env.PORT}`))