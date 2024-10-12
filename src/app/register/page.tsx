"use client"

import { useState } from "react";
import React from "react";

export interface User {
    name: string;
    cep: number;
    email: string;
    password: string
}

const Register = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cep, setCep] = useState<number>(0);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const addUser = async () => {
        if (password !== confirmPassword) {
            alert('Erro: As senhas não coincidem');
            return;
        }

        const userData = {
            email: email,
            password: password,
            nome: nome,
            cep: cep
        };

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.status === 201) {
                alert('Sucesso: Usuário registrado com sucesso!');
                window.location.href = '/login';
            } else {
                alert('Erro: ' + data.error);
            }
        } catch (error) {
            alert('Erro: ' );
        }
    };
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center ">
                <div className="row card shadow-lg p-4" style={styles.panel}>
                    <h3 className="card-title text-center mb-4">Registro</h3>
                    <form>
                        <div className="mb-3">
                            <input className="form-control"
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                type="number"
                                placeholder="CEP"
                                onChange={(e) => setCep(Number(e.target.value))}
                                value={cep}
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100 mb-2" onClick={(e) => { e.preventDefault(); addUser() }}>Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const styles = {
    panel: {
        width: '30rem',
    },
}
export default React.memo(Register);
