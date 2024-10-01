import React from 'react';

export default function Page() {
    return (
        <div style={styles.container}>
            <div className='card bg-primary' style={styles.card}>
                <h2 style={styles.text} className='card-text text-light'>
                    Pontos de Coleta de Lixo em São Paulo: Uma História de Evolução Urbana
                </h2>
                <p className='card-text text-light'>
                    Bem-vindo ao Amb.ento, seu guia digital para uma São Paulo mais limpa e sustentável! Vamos explorar a fascinante história e o funcionamento dos pontos de coleta de lixo na maior metrópole do Brasil.
                </p>
                <h3 style={styles.text} className='card-text text-light'>
                    Uma Jornada Através do Tempo
                </h3>
                <p className='card-text text-light'>
                    A história da coleta de lixo em São Paulo remonta ao século XIX, quando a cidade ainda engatinhava em seu crescimento. Naquela época, o descarte de resíduos era um problema crescente, com o lixo sendo frequentemente jogado nas ruas ou em terrenos baldios.
                    Foi apenas no início do século XX que São Paulo começou a implementar um sistema mais organizado de coleta. Em 1869, surgiu o primeiro serviço de limpeza pública da cidade, mas foi em 1929 que o primeiro incinerador de lixo foi instalado, marcando o início de uma nova era na gestão de resíduos.

                </p>
                <h3 style={styles.text} className='card-text text-light'>
                    Evolução e Modernização
                </h3>
                <p className='card-text text-light'>
                    Ao longo das décadas, o sistema de coleta evoluiu significativamente: <br />

                    <strong>Anos 60-70:</strong> Implementação da coleta domiciliar regular. <br />

                    <strong>Anos 80:</strong> Início das primeiras iniciativas de coleta seletiva. <br />

                    <strong>Anos 90:</strong> Criação dos primeiros Ecopontos. <br />

                    <strong>Anos 2000:</strong> Expansão da rede de Ecopontos e introdução de tecnologias modernas de gestão. <br />
                </p>
                <h3 style={styles.text} className='card-text text-light'>
                    Como Funciona Hoje
                </h3>
                <p className='card-text text-light'>
                    Atualmente, São Paulo conta com uma rede diversificada de pontos de coleta:  <br />

                    <strong>Ecopontos:</strong> São locais de entrega voluntária para pequenos volumes de entulho, grandes objetos e resíduos recicláveis. 
                    São Paulo possui mais de 100 Ecopontos espalhados pela cidade.  <br />


                    <strong>Pontos de Entrega Voluntária (PEVs):</strong> Contêineres específicos para recicláveis, 
                    geralmente localizados em áreas de grande circulação.  <br />

                    <strong>Cooperativas de Reciclagem:</strong> Parceiras da prefeitura, essas cooperativas recebem e processam materiais recicláveis.  <br />

                    <strong>Coleta Domiciliar:</strong> Caminhões que passam regularmente pelos bairros, coletando resíduos domésticos.  <br />

                    <strong>Coleta Seletiva:</strong> Serviço específico para materiais recicláveis, com dias e horários predeterminados. <br />
                </p>
                <h3 style={styles.text} className='card-text text-light'>
                    Curiosidades
                </h3>
                <p className='card-text text-light'>
                    São Paulo produz cerca de 20 mil toneladas de resíduos sólidos por dia! <br />

                    O Aterro Sanitário Bandeirantes, já desativado, foi transformado em um parque e gera energia através do biogás
                     produzido pela decomposição do lixo.  <br />

                    A cidade possui um programa chamado "Recicla Sampa", que incentiva a reciclagem e oferece benefícios
                     aos participantes.  <br />

                    Em alguns bairros, há coleta subterrânea de lixo, com contêineres instalados abaixo do nível da rua.
                </p>



                <h3 style={styles.text} className='card-text text-light'>
                    Como o Amb.ento Pode Ajudar
                </h3>
                <p className='card-text text-light'>
                    Nosso aplicativo Amb.ento foi desenvolvido para tornar a gestão de resíduos mais acessível
                    e eficiente para todos os paulistanos.  <br />
                    Com ele, você pode:  <br />

                    Localizar o Ecoponto mais próximo <br />
                    Verificar os horários de coleta seletiva na sua região  <br />
                    Aprender sobre separação correta de resíduos  <br />
                    Participar de programas de incentivo à reciclagem  <br />
                    Juntos, podemos fazer de São Paulo uma cidade mais limpa e sustentável.  <br />
                    Baixe o Amb.ento agora e faça parte dessa revolução verde! 
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
