import axios from 'axios'
import storage from 'local-storage'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function ListarProdutos() {
    const token = storage('user-access-token');
    const r = await api.get('/produto/visualizar', {
        headers: {
            'user-access-token': token.jwt
        },
    })

    return r;
}

export async function DeletarProduto(id) {
    const token = storage('user-access-token'); 

    const r = await api.delete(`/produto/${id}/deletar`, {
        headers: {
            'user-access-token': token.jwt
        }
    });

    return r.data; 
}

export async function EditarProduto(produto) {
    const token = storage('user-access-token');
    const r = await api.put(
        '/produto/editar',
        { produto },
        {
            headers: {
                'user-access-token': token.jwt
            }
        }
    );

    return r.data;
}

export async function AddProduto(produto) {
    const token = storage('user-access-token');
    const r = await api.post(
        '/produto/adicionar',
        { produto },
        {
            headers: {
                'user-access-token': token.jwt
            }
        }
    );

    return r.data;
}
