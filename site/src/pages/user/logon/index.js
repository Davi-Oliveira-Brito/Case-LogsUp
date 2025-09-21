import { useNavigate } from 'react-router-dom'
import Button from "../../../components/Button";
import './index.scss'


export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="LogonPage">
            <section className="LogonArea">
                <div className="LogonLogo">
                    <img src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className="Logon">
                    <div className="LogonForm">
                        <p className="LogonTittle">Criar Conta</p>
                        <div className="LogonText">
                            <label>Nome</label>
                            <input type="text" />
                        </div>
                        <div className="LogonText">
                            <label>Email</label>
                            <input type="Email" />
                        </div>
                        <div className="LogonText">
                            <label>Senha</label>
                            <input type="Password" />

                        </div>
                    </div>
                    <Button
                        onClick={() => navigate('/user/login')} Text="Criar Conta" width="50%" padding="15px 0px" />

                </div>

            </section>
        </main>
    );
}