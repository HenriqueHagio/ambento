import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-success' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Eletrônicos
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Computadores, laptops
                    Celulares, tablets
                    Impressoras
                    Câmeras digitais
                    Aparelhos de som e vídeo
                    Periféricos (teclados, mouses, etc.)

                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Entregue em pontos de coleta especializados em lixo eletrônico <br />
                    Leve a Ecopontos que aceitam eletrônicos <br />
                    Participe de programas de reciclagem de fabricantes  <br />
                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    Eletrônicos contêm metais pesados que são tóxicos se liberados no ambiente <br />
                    Apenas 17% do lixo eletrônico global é reciclado adequadamente <br />
                    A reciclagem de 1 milhão de celulares pode recuperar 16 toneladas de cobre <br />
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
