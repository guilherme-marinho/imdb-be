### English

# Movie Finder Backend Documentation

This documentation provides an overview of the backend server for the Movie Finder App. The backend is built using Node.js, Express, and Prisma, and serves as the API for the Movie Finder frontend.

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v14 or later)
- Yarn package manager
- Docker (for the database)

### Setting Up the API Key

To access the IMDb API, you need an API key.

- Visit https://www.omdbapi.com/ to generate your API key.
- Follow the instructions on the website to obtain your API key.

### Project Setup

- Clone or download this repository.
- Navigate to the project directory in the terminal.
- Run the following command to install dependencies:

```bash
yarn install
```

- Create a .env file in the project root and add your IMDb API key:

```bash
API_KEY=YOUR_KEY_HERE
```

### Database

This project uses a PostgreSQL database via Docker.

- Make sure you have Docker installed.
- In the project root directory, you'll find a docker-compose.yml file. Run the following command to start the database:

```bash
docker-compose up -d
```

### Starting the Server

To start the server, run the following command:

```bash
yarn dev
```

This will start the backend server on port 3000.

Now, the backend server is ready to be used in conjunction with the Movie Finder frontend.


### Portuguese:

# Documentação do Backend do Movie Finder

Esta documentação oferece uma visão geral do servidor backend para o Movie Finder App. O backend é construído usando Node.js, Express e Prisma, e serve como a API para o frontend do Movie Finder.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (v14 ou posterior)
- Gerenciador de pacotes Yarn
- Docker (para o banco de dados)

## Configurando a Chave da API

Para acessar a API do IMDb, você precisa de uma chave de API. 

1. Acesse o site https://www.omdbapi.com/ para gerar a sua chave de API.
2. Siga as instruções no site para obter sua chave de API.

## Configurações do Projeto

1. Clone ou faça o download deste repositório.
2. Navegue até o diretório do projeto no terminal.
3. Execute o seguinte comando para instalar as dependências:

```bash
yarn install
```

Crie um arquivo .env na raiz do projeto e adicione sua chave de API do IMDb:

```bash
API_KEY=SUA_CHAVE_AQUI
```

### Banco de Dados

Este projeto utiliza um banco de dados PostgreSQL via Docker.

- Certifique-se de ter o Docker instalado.
- No diretório raiz do projeto, você encontrará um arquivo docker-compose.yml. Execute o seguinte comando para iniciar o banco de dados:

```bash
docker-compose up -d
```

### Iniciando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
yarn dev
```

Isso iniciará o servidor backend na porta 3000.

Agora o servidor backend está pronto para ser usado em conjunto com o frontend do Movie Finder.
