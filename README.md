Amb.ento
Amb.ento é um projeto de aplicativo web desenvolvido em Next.js com funcionalidades do Google Maps para auxiliar na coleta de resíduos e conscientização ambiental.

Requisitos
Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

Node.js (versão 18.x ou superior)
npm (geralmente incluído com a instalação do Node.js)
Google Maps API Key (para usar o Google Maps no projeto)
Configuração do Ambiente
Clone o repositório em sua máquina local:

bash
Copiar código
git clone https://github.com/seu-usuario/amb-ento.git
Acesse o diretório do projeto:

bash
Copiar código
cd amb-ento
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API do Google Maps:

makefile
Copiar código
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
Certifique-se de que as dependências do projeto estão corretas e atualizadas:

bash
Copiar código
npm run lint
Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes comandos:

npm run dev
Executa o projeto em modo de desenvolvimento. Abra http://localhost:3000 para visualizar no navegador.

A página será recarregada automaticamente conforme você editar os arquivos.

npm run build
Compila o projeto para produção na pasta .next. Esse comando otimiza o projeto para melhor desempenho.

npm run start
Inicia o servidor em modo de produção após a compilação.

npm run lint
Executa o ESLint para checar o código em busca de problemas e sugerir melhorias conforme as regras definidas.

Tecnologias Utilizadas
Next.js: Framework para React que permite renderização do lado do servidor.
React: Biblioteca JavaScript para criação de interfaces de usuário.
Bootstrap & Bootswatch: Framework CSS para estilização e temas prontos.
Google Maps API: Utilizado para mostrar pontos de coleta próximos no mapa.