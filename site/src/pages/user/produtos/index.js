import './index.scss'
import Button from '../../../components/Button/index.js'
import ProdutoCard from '../../../components/produtoCard/index.js'
export default function Produtos() {
    let text = "Um notebook é tudo que você precisaUm notebook é tudo que você precis Um notebook é tudo que você precisaque você precisa"
    return (
        <main className="ProdutosPage">
            <section className='pg-m'>
                <div className='top'>
                    <img src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className='bottom'>
                    <div className='pg-t'>
                        <h2 className='tittle'>Produtos</h2>

                        <Button Text="Adcionar" width="125px" padding="7px 0px" />
                    </div>
                    <div className='Produtos'>
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                        <ProdutoCard nome="Notebook Gaymer" desc={text} qtd="10" preco="R$ 12.99" data="06/10/2006" />
                    </div>
                </div>
            </section>
        </main>
    );
}