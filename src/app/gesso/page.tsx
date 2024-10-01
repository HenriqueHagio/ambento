import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-primary' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Gesso
                </h2>
                <h3 className='card-text text-light'>
                    Materiais considerados:
                </h3>
                <p className='card-text text-light'>
                    Placas de gesso,
                    Resíduos de gesso de obras,
                    Gesso acartonado (Drywall) e
                    Molduras e decorações de gesso
                </p>
                <h3 className='card-text text-light'>
                    Como Descartar:
                </h3>
                <p className='card-text text-light'>
                    Leve a Ecopontos que aceitam gesso <br />
                    Contrate empresas especializadas em coleta de gesso <br />
                    Verifique com fabricantes sobre programas de logística reversa <br />
                </p>
                <h3 className='card-text text-light'>
                    Dados Úteis:
                </h3>
                <p className='card-text text-light'>
                    O gesso é 100% reciclável e pode ser reutilizado infinitamente <br />
                    Não deve ser misturado com outros tipos de entulho <br />
                    Quando reciclado, pode ser usado na agricultura como corretor de solo <br />
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
