import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-success' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Seringas e Agulhas
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Seringas usadas,
                    Agulhas,
                    Lancetas de teste de glicemia e
                    Outros materiais perfurocortantes de uso médico
                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Armazene em recipientes rígidos (como garrafas PET) <br />
                    Entregue em postos de saúde<br />
                    Leve a hospitais que aceitam estes materiais<br />
                    Utilize serviços especializados de coleta de resíduos hospitalares<br />
                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    Nunca descarte no lixo comum para evitar acidentes <br />
                    O descarte incorreto pode transmitir doenças<br />
                    Em São Paulo, alguns postos de saúde fornecem recipientes próprios para descarte<br />
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
