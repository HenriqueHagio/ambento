"use client"

import { useUserContext } from '@/context/userContext';
import React, { useEffect, useState } from 'react'

export default function feedback() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const { user } = useUserContext();

    useEffect(() => {
        const checkAuth = () => {
          setName(user?.name || '');
        };
        checkAuth();
      }, [user]);
    
    const addFeedback = async () => {
        const feedbackData = {
            name: name,
            text: text,
           
        };

        try {
            const response = await fetch('/api/feedbacks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            const data = await response.json();

            if (response.status === 201) {
                alert('Sucesso: Feedback registrado com sucesso!');
                window.location.href = '/feedback';
            } else {
                alert('Erro: ' + data.error);
            }
        } catch (error) {
            alert('Erro: ' );
        }
    };
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '30rem' }}>
                <div className="row card shadow-lg p-4" style={styles.panel}>
                    <h3 className="card-title text-center mb-4" >Feedback</h3>
                    <p className="card-title text-center mb-4">
                        Sua opinião é muito importante para nós! Por favor, nos envie seu feedback.
                    </p>
                    <form>
                        <div className="mb-3">
                            <input className="form-control"
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required = {true}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control"
                                placeholder="Feedback"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                rows={5}
                                cols={50}
                                style={{ resize: "none" }} 
                                required = {true}

                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100 mb-2" onClick={(e) => { e.preventDefault(); addFeedback()}}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const styles = {
    panel: {
        width: '30rem',
    },
}