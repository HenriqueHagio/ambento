"use client"

import { useUserContext } from "@/context/userContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from '../../../firebaseConfig'; 

import Link from "next/link";
import { useState } from "react";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUserContext();


    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser({ email: user.email!, name: user.displayName || 'User' })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Erro na autenticação:", errorCode, errorMessage);
            });
    }
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center ">
                <div className="row card shadow-lg p-4" style={styles.panel}>
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form>
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
                            <button className="btn btn-primary w-100 mb-2" onClick={() => signIn(email, password)}>Login</button>
                            <button className="btn btn-primary w-100 mb-2">
                                <Link className="nav-link" href="/register">
                                    Registrar
                                </Link>
                            </button>
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