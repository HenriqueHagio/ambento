import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-success' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Móveis
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Sofás, poltronas,
                    Mesas, cadeiras,
                    Armários, estantes,
                    Camas, colchões e
                    Outros móveis domésticos

                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Doe para instituições de caridade se estiver em bom estado <br />
                    Agende coleta especial com a prefeitura <br />
                    Leve a um Ecoponto (verifique limite de tamanho) <br />
                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    O descarte incorreto de móveis pode causar obstrução de vias e bueiros   <br />
                    Madeira de móveis pode ser reciclada para fabricação de painéis e MDF    <br />
                    Móveis em bom estado podem ser doados ou vendidos <br />
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
