import React from "react";
import './index.scss'
import Button from "../../../components/Button";

export default function LoginAdmin() {
    return (
        <main className="LoginPage">
            <section className="LoginArea">
                <div className="LoginLogo">
                    <img src="/assets/images/LogsUp.png" alt="" />
                </div>
                <div className="Login">
                    <div className="LoginForm">
                        <h2 className="LoginTittle">Administrador</h2>
                        <div className="LoginText">
                            <label>Email</label>
                            <input type="Email" />
                        </div>
                        <div className="LoginText">
                            <label>Senha</label>
                            <input type="Password" />

                        </div>
                    </div>
                    <Button
                        Text="Entrar" width="50%" padding="15px 0px" />

                </div>

            </section>
        </main>
    );
}