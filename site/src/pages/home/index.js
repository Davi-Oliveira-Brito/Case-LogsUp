import { useNavigate } from 'react-router-dom'
import Button from "../../components/Button";

import './index.scss'

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="HomePage">
            <section className="HomeArea">
                <div className="HomeLogo">
                    <img src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className="Home">
                    <div className="HomeForm">
                        <p className="HomeTittle">Entrar Como:</p>
                        <Button
                           onClick={() => navigate('/user/login')} Text="Usuario" width="100%" padding= "15px 0px" />
                        
                        <Button
                            onClick={() => navigate('/admin/login')} Text="Administrador" width="100%" padding= "15px 0px" />
                        <label>Não tem uma conta? <span  onClick={() => navigate('/user/logon')}>Criar Conta</span></label>
                    </div>

                </div>

            </section>
        </main>
    );
}