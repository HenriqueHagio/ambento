import { query, collection, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../../firebaseConfig'; 
import { NextRequest, NextResponse } from 'next/server';
import {  } from 'firebase/auth';


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
