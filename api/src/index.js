import 'dotenv/config';
import express from 'express';
import cors from 'cors';


import UserController from './controller/User/UserController.js';
import AdminController from './controller/Admin/AdminController.js'
import ProdutoController from './controller/User/ProdutoController.js'

//validação
import { UserPermission } from './controller/auth.js';

const server = express();
server.use(cors());
server.use(express.json());

//Configuração dos Endpoints
server.use('/user', UserController);
server.use('/admin', AdminController);
server.use('/produto', UserPermission, ProdutoController);

server.listen(process.env.PORT, () => console.log(`API Conectada na porta ${process.env.PORT}`))