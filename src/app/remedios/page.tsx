import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-primary' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Remédios
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Medicamentos, vencidos,
                    Sobras de medicamentos,
                    Frascos e embalagens de remédios,
                    Pomadas e cremes medicinais
                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Entregue em farmácias participantes do programa de coleta<br />
                    Leve a postos de saúde que aceitam medicamentos<br />
                    Utilize pontos de coleta em hospitais (quando disponíveis)<br />

                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    Nunca descarte remédios no lixo comum ou na rede de esgoto <br />
                    Medicamentos descartados incorretamente podem contaminar o solo e a água<br />
                    Separar a embalagem do medicamento facilita a reciclagem<br />
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
