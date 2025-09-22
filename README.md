# Case Vaga Desenvolvedor Jr. 

## 1. Introdução / Objetivo
O projeto consiste em desenvolver um sistema simples de gerenciamento de produtos, com autenticação de usuários, controle de permissões e painel web para visualização e manipulação dos produtos. O objetivo do case foi demonstrar habilidades em **desenvolvimento full-stack**, incluindo **front-end, back-end e banco de dados**, bem como boas práticas de autenticação, autorização e organização de código.

## 2. Tecnologias Utilizadas
- **Front-end:** React.js  
- **Back-end:** Node.js (Express)  
- **Banco de dados:** MySQL  
- **Autenticação:** JWT (JSON Web Token)  
- **Gerenciamento de estado:** React Hooks  
- **Notificações:** React Toastify

## 3. Estrutura do Projeto
**Back-end (Node.js + Express):**
```
/src
├─ controller/
|   └─ auth.js 
├─ repository/
└─ connection.js
```


**Front-end (React.js):**
```
/src
├─ api/
├─ components/
└─ pages/
  ├─ admin/
  ├─ home/
  └─ user/
```

# Instalação do Projeto
**MySQL Version: 8.0.43**

1. Clone o Projeto
```bash
git clone https://github.com/Davi-Oliveira-Brito/Case-LogsUp.git
cd Case-LogsUp
```
2. Instale as dependencias da API
```bash
cd api 
npm i
cd ..
```
3. Instale as dependencias do React
```bash
cd site 
npm i
cd ..
```

# Utilização do Sistema
1. Crie o Banco de dados

em **'/Case-LogsUp/DB'**
há uma arquivo chamado **DDL**, nele há todos os comandos para criação do Banco de dados

2. Inicie a APi
```bash
cd api
npm start
```
3. Em outro terminal, Inicie o Site
```bash
cd site
npm start
```

Se seguir estes passos, o sistema iniciará e funcionará localmente com todas suas funcionalidades.

---
# Documentação API

API simples para cadastro, login de usuários e visualização de produtos, com controle de permissões.

---

## Endpoints

### 1. Login do Usuário

**URL:**

```
POST http://localhost:5000/user/login
```

**Descrição:**
Autentica o usuário e retorna um token JWT.

> **Observação:** O usuário só poderá fazer login se tiver **permissão concedida pelo admin**.

**Request Body (JSON):**

```json
{
  "email": "",
  "senha": ""
}
```

**Response 200 (Sucesso):**

```json
{
  "jwt": "<user-access-token>"
}
```

**Response 401 (Não autorizado):**

```json
{
  "message": "Usuário sem permissão ou credenciais inválidas"
}
```

---

### 2. Visualizar Produtos

**URL:**

```
GET http://localhost:5000/usuario/produtos
```

**Descrição:**
Retorna a lista de produtos cadastrados.

> **Observação:** Apenas usuários autenticados podem acessar este endpoint.

**Headers:**

| Campo             | Valor                     |
| ----------------- | ------------------------- |
| user-access-token | `<token obtido no login>` |

**Response 200 (Sucesso):**

```json
[
  {
    "id": 1,
    "nome": "Produto A",
    "preco": 50.0,
    "descricao": "Descrição do produto"
  }
]
```

**Response 401 (Não autorizado):**

```json
{
  erro
}
```

---

## Observações

> o arquivo `.env` está público **apenas como referência** para facilitar testes.  
> **tenho total noção de que isso não é uma boa prática**, pois o `.env` pode conter informações sensíveis (senhas, chaves, tokens).  

Para usar o projeto corretamente, crie seu próprio `.env` local e configure suas credenciais. Exemplo:


* Faça o login primeiro para obter o token.
* Use o token no header `user-access-token` para acessar endpoints protegidos.
