import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-success' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Entulhos
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Restos de construção e demolição
                    Tijolos, concreto, argamassa
                    Madeira de obras
                    Telhas, azulejos
                    Terra e pedras
                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Leve a um Ecoponto (limite de 1m³ por dia) <br />
                    Contrate uma empresa especializada para volumes maiores <br />
                    Utilize caçambas regulamentadas para coleta <br />
                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    Entulhos podem ser reciclados e usados como base para pavimentação <br />
                    São Paulo gera cerca de 17 mil toneladas de entulho por dia <br />
                    O descarte irregular de entulhos pode resultar em multas <br />
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '70rem',
        padding: '2rem'
    },
    text: {
        textAlign: 'center',
    }
};
