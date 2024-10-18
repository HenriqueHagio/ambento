import { FIRESTORE_DB } from '../../../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, text } = body;

    if (!name || !text) {
        return NextResponse.json({ error: 'Todos os campos são obrigatórios!' }, { status: 400 });
    }

    try {

        await addDoc(collection(FIRESTORE_DB, 'feedback'), {
            name: name,
            text: text,
        });

        return NextResponse.json({ message: 'FeedBack registrado com sucesso!' }, { status: 201 });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ error: 'Erro ao registrar usuário: ' + errorMessage }, { status: 500 });
    }
}
