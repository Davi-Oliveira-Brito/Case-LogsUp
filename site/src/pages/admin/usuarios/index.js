import './index.scss'
import storage from 'local-storage'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UserCard from '../../../components/usuarioCard'
import Header from '../../../components/header/index.js'
import UserModal from '../../../components/userPopup/index.js';

import { ListUsers } from '../../../api/adminApi.js'

export default function AdminArea() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    async function userList() {
        try {
            const response = await ListUsers();
            setUsers(response.data);
        } catch (error) {
            toast.error("Erro")
        }
    }

    useEffect(() => {
        const token = storage('admin-access-token');
        if (!token) {
            navigate('/admin/login');
        } else {
            userList();
        }
    }, []);

    return (
        <main className="UserPage">
            <UserModal
                isOpen={open}
                setOpen={setOpen}
                id={selectedUser?.id}
                nome={selectedUser?.nome}
                email={selectedUser?.email}
                permissao={selectedUser?.permissao}
                onUpdate={(id, novaPermissao) => {
                    setUsers(prev => prev.map(u => u.id === id ? { ...u, permissao: novaPermissao } : u));
                }}
            />

            <section className='pg-m'>
                <Header token='admin-access-token' />
                <div className='bottom'>
                    <div className='tittle'>
                        <h2 className='t'>Usuarios</h2>
                    </div>
                    <div className='usuarios'>
                        {users.map((item, index) =>
                            <UserCard
                                key={item.id || index}
                                nome={item.nome}
                                email={item.email}
                                permissao={item.permissao}
                                onClick={() => {
                                    setSelectedUser(item); 
                                    setOpen(true);         
                                }}
                            />
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}