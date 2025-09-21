import './index.scss'
import Button from '../Button'
export default function UserCard({nome, email, permissao, onClick}){


    return(
        <div className='UserCard'>
            <div className='left'>
                <p className='nome'>{nome}</p>
                <p className='email'>{email}</p>
                <p className='permissao'>Permissão: {permissao}</p>
            </div>
            <div className='right'>
                <Button Text="Editar" width="125px"  padding="7px 0px" onClick={onClick}/>
            </div>
        </div>
    )
}