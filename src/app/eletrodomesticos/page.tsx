import React from 'react';

export default function Page() {
  return (
    <div style={styles.container}>
      <div className='card bg-success' style={styles.card}>
        <h2 style={styles.text} className='card-text text-light'>
          Eletrodomésticos
        </h2>
        <h3 className='card-text text-light'>
          Materiais considerados:
        </h3>
        <p className='card-text text-light'>
          Geladeiras, freezers
          Máquinas de lavar e secar roupas
          Fogões, fornos
          Microondas
          Ar condicionados
          Outros aparelhos domésticos de grande porte

        </p>
        <h3 className='card-text text-light'>
          Como Descartar:
        </h3>
        <p className='card-text text-light'>
          Leve a um Ecoponto da cidade <br />
          Utilize serviços de coleta especial da prefeitura (agende pelo site ou telefone)  <br />
          Participe de campanhas de coleta de eletrodomésticos  <br />
        </p>
        <h3 className='card-text text-light'>
          Dados Úteis:
        </h3>
        <p className='card-text text-light'>
          95% dos materiais de eletrodomésticos podem ser reciclados <br />
          O descarte incorreto pode liberar gases prejudiciais ao meio ambiente <br />
          Muitas empresas oferecem programas de logística reversa para seus produtos <br />
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
