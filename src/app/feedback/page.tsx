"use client"

import React, { useState } from 'react'

export default function feedback() {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

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
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                type="textArea"
                                placeholder="Feedback"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100 mb-2" onClick={(e) => { e.preventDefault(); }}>Enviar</button>
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