import './index.scss'
import { useState } from 'react';
import { AddProduto } from '../../api/produtoApi'

export default function AddProdutoModal({ ModalisOpen, setModalOpen, onAdd }) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [descProduto, setDescProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState(0);
    const [qtdProduto, setQtdProduto] = useState(0);

    if (!ModalisOpen) return null;

    async function handleSave() {
        try {
            const novoProduto = {
                nome: nomeProduto,
                descricao: descProduto,
                preco: precoProduto,
                quantidade: qtdProduto,
            };

            const result = await AddProduto(novoProduto);

            // garante que o objeto tenha uma data válida
            const produtoComData = {
                ...novoProduto,
                ...result, 
                datacriacao: new Date().toISOString(),
            };

            if (onAdd) {
                onAdd(produtoComData);
            }

            setModalOpen(false);
        } catch (err) {
            console.error("Erro ao adicionar produto", err);
            alert("Erro ao adicionar produto");
        }
    }


    return (
        <>
            <div className="produtoModal-overlay" onClick={() => setModalOpen(false)}></div>

            <div className='ProdutoModal'>
                <div className='content'>
                    <p className='tittle'>Adicionar Produto</p>

                    <div className='texts'>
                        <div className='inlabel'>
                            <label>Nome</label>
                            <input type="text" onChange={e => setNomeProduto(e.target.value)} />
                        </div>

                        <div className='inlabel'>
                            <label>Descrição</label>
                            <textarea onChange={e => setDescProduto(e.target.value)} />
                        </div>

                        <div className='text-bottom'>
                            <div className='inlabel-bottom'>
                                <label>Quantidade</label>
                                <input type="number" onChange={e => setQtdProduto(Number(e.target.value))} />
                            </div>
                            <div className='inlabel-bottom'>
                                <label>Preço</label>
                                <input type="number" onChange={e => setPrecoProduto(Number(e.target.value))} />
                            </div>
                        </div>
                    </div>

                    <div className='actions'>
                        <button className='Save' onClick={handleSave}>Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    );
}
