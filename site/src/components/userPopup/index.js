import './index.scss';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AdminPermission } from '../../api/adminApi.js'

export default function UserModal({ isOpen, setOpen, nome, email, permissao, id, onUpdate }) {

    const [selectedPermissao, setSelectedPermissao] = useState(permissao ?? undefined);

    const handleSave = async () => {
        try {
            await AdminPermission(id, selectedPermissao);
            toast.success('Permissão atualizada!');
            onUpdate(id, selectedPermissao);
            setOpen(false);
        } catch (err) {
            toast.error('Erro ao atualizar permissão');
        }
    };

    useEffect(() => {
        setSelectedPermissao(permissao);
    }, [permissao]);

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={() => setOpen(false)}></div>

            <div className='UserModal'>
                <div className='content'>
                    <div className='modaltop'>
                        <p className='nome'>{nome}</p>

                        <img onClick={() => setOpen(false)} src="/assets/icons/delete.svg" alt="" />
                    </div>
                    <p className='email'>{email}</p>
                    <div className='permissao'>
                        <p className='text'>Permissão:</p>
                        <select
                            value={selectedPermissao ?? ""}
                            onChange={e => setSelectedPermissao(Number(e.target.value))}
                        >
                            <option value="" disabled>Selecione a permissão</option>
                            <option value={0}>Analista</option>
                            <option value={1}>Supervisor</option>
                        </select>
                    </div>

                    <button onClick={handleSave}>Salvar</button>

                </div>
            </div>
        </>
    );
}
