import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password, nome, cep } = body;

    if (!email || !password || !nome || !cep) {
        return NextResponse.json({ error: 'Todos os campos são obrigatórios!' }, { status: 400 });
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;

        await addDoc(collection(FIRESTORE_DB, 'users'), {
            name: nome,
            cep: cep,
            email: email,
            uid: user.uid,
        });

        return NextResponse.json({ message: 'Usuário registrado com sucesso!' }, { status: 201 });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ error: 'Erro ao registrar usuário: ' + errorMessage }, { status: 500 });
    }
}
