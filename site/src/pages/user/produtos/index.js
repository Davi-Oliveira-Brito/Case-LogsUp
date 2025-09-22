import './index.scss'
import storage from 'local-storage'

import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/index.js'
import Header from '../../../components/header/index.js'
import ProdutoCard from '../../../components/produtoCard/index.js'
import ProdutoModal from '../../../components/produtoPopup/index.js'
import AddProdutoModal from '../../../components/AdicionarProduto/index.js'

import { ListarProdutos } from '../../../api/produtoApi.js'

export default function Produtos() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const [selectedproduto, setSelectedproduto] = useState(null);

    async function produtosList() {
        try {
            const response = await ListarProdutos();
            setProdutos(response.data);
        } catch (error) {
            toast.error("Erro")
        }
    }


    useEffect(() => {
        const token = storage('user-access-token');

        if (!token) {
            navigate('/user/login')
        } else {
            produtosList();
        }
    }, [])




    return (
        <main className="ProdutosPage">
            <AddProdutoModal
                ModalisOpen={openAdd}
                setModalOpen={setOpenAdd}
                onAdd={() => produtosList()}
            />

            <ProdutoModal
                isOpen={open}
                setOpen={setOpen}
                id={selectedproduto?.id}
                nome={selectedproduto?.nome}
                descricao={selectedproduto?.descricao}
                preco={selectedproduto?.preco}
                quantidade={selectedproduto?.quantidade}
                onUpdate={(id, novosDados) => {
                    setProdutos(prevProdutos =>
                        prevProdutos.map(p => p.id === id ? { ...p, ...novosDados } : p)
                    );
                }}
                onDelete={(id) => {
                    setProdutos(prevProdutos => prevProdutos.filter(p => p.id !== id));
                }}
            />

            <section className='pg-m'>
                <Header token='user-access-token' />

                <div className='bottom'>
                    <div className='pg-t'>
                        <h2 className='tittle'>Produtos</h2>

                        <Button Text="Adicionar" width="125px" padding="7px 0px" onClick={() => setOpenAdd(true)} />
                    </div>
                    <div className='Produtos'>
                        {produtos.map((item, index) =>
                            <ProdutoCard
                                key={item.id || index}
                                nome={item.nome}
                                desc={item.descricao}
                                qtd={item.quantidade}
                                preco={item.preco}
                                data={new Date(item.datacriacao).toLocaleString("pt-BR")}
                                editClick={() => {
                                    setSelectedproduto(item);
                                    setOpen(true);
                                }}
                                deleteClick={() => {
                                    setSelectedproduto(item);
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