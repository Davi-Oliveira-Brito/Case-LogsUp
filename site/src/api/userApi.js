import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function UserLogin(email, senha) {
    const r = await api.post('/user/login', {
        email: email,
        senha: senha
    })
    return r.data;
}