import { query, collection, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../../firebaseConfig'; 
import { NextRequest, NextResponse } from 'next/server';
import {  } from 'firebase/auth';


/**
 * Lida com solicitações GET para buscar um usuário pelo UID.
 *
 * @param req - O objeto de solicitação recebido.
 * @param params - Um objeto contendo os parâmetros da rota.
 * @param params.uid - O UID do usuário a ser buscado.
 * @returns Uma resposta JSON contendo os dados do usuário, se encontrado, ou uma mensagem de erro.
 *
 * @observações
 * - Se o UID não for fornecido ou não for uma string, uma resposta com status 400 é retornada.
 * - Se nenhum usuário for encontrado com o UID fornecido, uma resposta com status 404 é retornada.
 * - Se ocorrer um erro durante a operação de busca, uma resposta com status 500 é retornada.
 */
export async function GET(req: NextRequest, { params }: { params: { uid: string } }) {
    const { uid } = params; 
    if (!uid || typeof uid !== 'string') {
        return NextResponse.json({ error: 'UID é obrigatório e deve ser do tipo string' }, { status: 400 });
    }

    try {
        const q = query(collection(FIRESTORE_DB, 'users'), where('uid', '==', uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            return NextResponse.json({ user: doc.data() }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Nenhum usuário encontrado!' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar o usuário' }, { status: 500 });
    }
}
