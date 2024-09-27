import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';
import { useUserContext } from "@/context/userContext";
import jwt from 'jsonwebtoken';
import { error } from "console";
import { decode } from "punycode";


export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    const { user } = useUserContext();
    if (req.method === 'POST') {
        if (user?.logged) {
            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET as string,
                { expiresIn: '1d' } 
                
            ); res.setHeader('Set-Cookie', serialize('authToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 1,
                sameSite: 'strict',
                path: '/'
            }));

            res.status(200).json({ message: 'Login efetuado' })
        } else {
            res.status(401).json({ error: 'Login não efetuado' });
        }
    } else {
        res.status(405).json({ message: 'metodo não valido' })
    }
}

export function authenticate(req: NextApiRequest, res: NextApiResponse, next: Function) {
    const token = req.cookies.authToken;

    if(!token){
        return res.status(401).json({error: 'Token não encontrado'})
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded)=>{
        if(err){
            return res.status
        }
        next();
    })
}