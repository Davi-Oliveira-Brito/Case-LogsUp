import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { UserLogin } from '../../../api/userApi.js'
import { toast } from 'react-toastify';

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import Button from "../../../components/Button";

import './index.scss'

export default function LoginUser() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate();
    const ref = useRef()

    useEffect(() => {
        if (storage('user-access-token'))
            navigate('/user/produtos')
    }, [])



    async function entrarClick() {
        setCarregando(true);
        ref.current.continuousStart();
        try {
            const r = await UserLogin(email, senha);
            storage('user-access-token', r)
            setTimeout(() => {
                navigate('/user/produtos')
            }, 3000)
            
        } catch (error) {
            toast.error(error.response.data.r)
            ref.current.complete();
            setCarregando(false)
            if (error.response.status === 401)
                console.log(error.response.data.err)
        }
    }


    return (
        <main className="LoginPage">
            <LoadingBar color="#2dade9ff" ref={ref} />


            <section className="LoginArea">
                <div className="LoginLogo">
                    <img src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className="Login">
                    <div className="LoginForm">
                        <p className="LoginTittle">Usuário</p>
                        <div className="LoginText">
                            <label>Email</label>
                            <input type="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="LoginText">
                            <label>Senha</label>
                            <input type="Password" value={senha} onChange={e => setSenha(e.target.value)} />

                        </div>
                    </div>
                    <Button
                        onClick={entrarClick} disabled={carregando} Text="Entrar" width="50%" padding="15px 0px" />

                </div>

            </section>
        </main>
    );
}