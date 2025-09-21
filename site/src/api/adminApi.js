import axios from 'axios'
import storage from 'local-storage'

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export async function AdminLogin(email, senha) {
  const r = await api.post('/admin/login', {
    email: email,
    senha: senha
  })
  return r.data;
}

export async function AdminPermission(id, permissao) {
  const token = storage('admin-access-token'); 
  const r = await api.put(`/admin/${id}/permissao`,
    { permissao: permissao },
    {
      headers: {
        'admin-access-token': token.jwt
      }
    }
  );
  return r.data;
}


export async function ListUsers() {
  const token = storage('admin-access-token');
  const r = await api.get('/admin/listar/usuarios', {
    headers: {
      'admin-access-token': token.jwt
    },
  });

  return r;
}