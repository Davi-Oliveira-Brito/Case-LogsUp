import jwt from 'jsonwebtoken';
const KEY = process.env.JWT_SECRET;


export function generateToken(data){
    return jwt.sign(data, KEY);
}

export function decodeToken(data){
    return jwt.decode(data)
}

export function UserPermission(req, resp, next){
    try {
        // verificar se o token foi passado no cabeçalho
        let token = req.headers['user-access-token']; 

        // verificar se o token foi passado como parametro de query
        if(token === undefined)
            token = req.query['user-access-token']; 

        //verificar o token, se ele é válido para a KEY
        let signed = jwt.verify(token, KEY);
        //console.log(signed)

        next();

    } catch (error) {
        resp.status(401).end()
    }
}

export function AdminPermission(req, resp, next){
    try {
        // verificar se o token foi passado no cabeçalho
        let token = req.headers['admin-access-token']; 

        // verificar se o token foi passado como parametro de query
        if(token === undefined)
            token = req.query['admin-access-token']; 

        //verificar o token, se ele é válido para a KEY
        let signed = jwt.verify(token, KEY);
        //console.log(signed)

        next();

    } catch (error) {
        resp.status(401).end()
    }
}