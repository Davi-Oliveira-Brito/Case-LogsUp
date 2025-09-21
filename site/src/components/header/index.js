import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

import './index.scss'

export default function Header({token}) {
    const navigate = useNavigate();
    function sairClick() {
        storage.remove(token)
        navigate('/')
    }
    return (
        <div className='top'>
            <img onClick={sairClick} src="/assets/images/LogsUp.png" alt="" />
        </div>
    )
}