import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Lida com a requisição POST para registrar um novo usuário.
 *
 * @param {NextRequest} req - O objeto de requisição recebido.
 * @returns {Promise<NextResponse>} - O objeto de resposta contendo o resultado do registro.
 *
 * A função espera um corpo JSON com os seguintes campos:
 * - email: O endereço de email do usuário.
 * - password: A senha para a conta do usuário.
 * - nome: O nome do usuário.
 * - cep: O código postal do usuário.
 *
 * Se algum desses campos estiver ausente, a função retorna um status 400 com uma mensagem de erro.
 *
 * A função tenta criar um novo usuário no Firebase Auth e salvar as informações do usuário no Firestore.
 * Se for bem-sucedida, retorna um status 201 com uma mensagem de sucesso.
 * Se ocorrer um erro durante o processo, retorna um status 500 com uma mensagem de erro.
 */
export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password, nome, cep } = body;

    if (!email || !password || !nome || !cep) {
        return NextResponse.json({ error: 'Todos os campos são obrigatórios!' }, { status: 400 });
    }

    try {
        // Criando usuário no Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = userCredential.user;

        // Salvando informações do usuário no Firestore
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
