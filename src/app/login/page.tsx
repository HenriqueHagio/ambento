"use client"

import { useUserContext } from "@/context/userContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../firebaseConfig';

import Link from "next/link";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUserContext();

    
    const getUserById = async (uid: string) => {
            const q = query(collection(FIRESTORE_DB, 'users'), where('uid', '==', uid))
            const querySnapshot = await getDocs(q);
                
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0]; // Pega o primeiro documento
                return doc.data();
            } else {
                console.log('Nenhum documento encontrado!');
              }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
    
            const userData = await getUserById(user.uid);
    
            // Atualize o estado do usuário com os dados obtidos
            if (userData) {
                setUser({
                    email: user.email!,
                    name: userData.name, // Assume que o nome está nos dados do Firestore
                    logged: true,
                    cep: userData.cep,
                    id: userData.uid
                });
            }
            setTimeout(() => {
                router.push('/');
            }, 100);        } 
            catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Erro na autenticação:", errorCode, errorMessage);
        }
    };
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
                            <button className="btn btn-primary w-100 mb-2" onClick={(e) => { e.preventDefault(); signIn(email, password) }}>Login</button>
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