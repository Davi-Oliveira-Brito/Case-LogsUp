import './index.scss'

export default function ProdutoCard({nome, desc, qtd, preco, data}){
    return(
        <div className='ProdutoCard'>
            <div className='Produto-l1'>
                <p className='nome'>{nome}</p>
                <div className='icons'>
                    <img src="/assets/icons/pencil.svg" alt="" />
                    <img src="/assets/icons/delete.svg" alt="" />
                    
                </div>
            </div>
            <div className='Produto-l2'>
                <p className='desc'>{desc}</p>
                <p className='text'><span>Quantidade:</span> {qtd}</p>
            </div>
            <div className='Produto-l3'>
                <p className='text'><span>Preço</span> {preco}</p>
                <p className='text'><span>Postado em:</span> {data}</p>
            </div>
        </div>
    )
}