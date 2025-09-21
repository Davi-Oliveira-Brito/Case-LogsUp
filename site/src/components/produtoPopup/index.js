import './index.scss';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { EditarProduto, DeletarProduto } from '../../api/produtoApi';

export default function ProdutoModal({ isOpen, setOpen, id, nome, descricao, preco, quantidade, onUpdate, onDelete }) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [descProduto, setDescProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState(Number(preco) || 0);
    const [qtdProduto, setQtdProduto] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setNomeProduto(nome || '');
            setDescProduto(descricao || '');
            setPrecoProduto(Number(preco || 0));
            setQtdProduto(quantidade || 0);
        }
    }, [isOpen, nome, descricao, preco, quantidade]);

    if (!isOpen) return null;

    const handleSave = async () => {
        try {
            await EditarProduto({
                id,
                nome: nomeProduto,
                descricao: descProduto,
                preco: precoProduto,
                quantidade: qtdProduto
            });

            toast.success('Produto atualizado com sucesso!');
            onUpdate?.(id, { nome: nomeProduto, descricao: descProduto, preco: precoProduto, quantidade: qtdProduto });
            setOpen(false);
        } catch (err) {
            toast.error(err.response?.data?.erro || "Erro ao atualizar produto");
        }
    };

    const handleDelete = async () => {
        try {
            await DeletarProduto(id);
            toast.success('Produto excluído com sucesso!');
            onDelete?.(id);
            setOpen(false);
        } catch (err) {
            toast.error(err.response?.data?.erro || "Erro ao excluir produto");
        }
    };


    return (
        <>
            <div className="produtoModal-overlay" onClick={() => setOpen(false)}></div>

            <div className='ProdutoModal'>
                <div className='content'>
                    <p className='tittle'>Editar Produto</p>

                    <div className='texts'>
                        <div className='inlabel'>
                            <label>Nome</label>
                            <input type="text" value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} />
                        </div>

                        <div className='inlabel'>
                            <label>Descrição</label>
                            <textarea value={descProduto} onChange={e => setDescProduto(e.target.value)} />
                        </div>

                        <div className='text-bottom'>
                            <div className='inlabel-bottom'>
                                <label>Quantidade</label>
                                <input type="number" value={qtdProduto} onChange={e => setQtdProduto(Number(e.target.value))} />
                            </div>
                            <div className='inlabel-bottom'>
                                <label>Preço</label>
                                <input type="number" value={precoProduto} onChange={e => setPrecoProduto(Number(e.target.value))} />
                            </div>
                        </div>
                    </div>

                    <div className='actions'>
                        <button className='excluir' onClick={handleDelete}>Excluir</button>
                        <button className='editar' onClick={handleSave}>Salvar</button>
                    </div>
                </div>
            </div>
        </>
    );
}
