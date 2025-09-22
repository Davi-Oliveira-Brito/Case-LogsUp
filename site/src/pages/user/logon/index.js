import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UserLogon } from '../../../api/userApi.js'

import Button from "../../../components/Button";

import './index.scss'

export default function Logon() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState(''); // renomeado de email2 para senha2

    const goHome = () => {
        navigate('/');
    };

    async function logonClick() {
        // validações simples
        if (!nome.trim()) {
            toast.error('Digite seu nome!');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            toast.error('Digite um e-mail válido!');
            return;
        }

        if (!senha.trim()) {
            toast.error('Digite sua senha!');
            return;
        }

        if (senha !== senha2) {
            toast.error('As senhas não coincidem!');
            return;
        }

        try {
            const r = await UserLogon(nome, email, senha);
            toast.success('Usuário cadastrado com sucesso!');
            navigate('/user/login');
        } catch (error) {
            toast.error(error.response?.data?.r || 'Erro ao cadastrar');
        } finally {
            setNome('');
            setEmail('');
            setSenha('');
            setSenha2('');
        }
    }

    return (
        <main className="LogonPage">
            <section className="LogonArea">
                <div className="LogonLogo">
                    <img onClick={goHome} src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className="Logon">
                    <div className="LogonForm">
                        <p className="LogonTittle">Criar Conta</p>
                        <div className="LogonText">
                            <label>Nome</label>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="LogonText">
                            <label>Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="LogonText">
                            <label>Confirme a Senha</label>
                            <input type="password" value={senha2} onChange={e => setSenha2(e.target.value)} />
                        </div>
                        <div className="LogonText">
                            <label>Senha</label>
                            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <Button
                        onClick={logonClick}
                        Text="Criar Conta"
                        width="50%"
                        padding="15px 0px"
                    />
                </div>
            </section>
        </main>
    );
}
