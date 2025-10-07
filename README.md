# 🚗 Projeto Loja de Veículos - API REST

API REST para gerenciamento de veículos e marcas de automóveis.

## 📋 Descrição

Este projeto é uma API desenvolvida em Node.js com Express para gerenciar um catálogo de veículos e suas respectivas marcas. O sistema permite cadastrar marcas de automóveis, adicionar veículos com informações detalhadas e fazer upload de imagens.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **PostgreSQL (pg)** - Banco de dados relacional
- **Multer** - Upload de arquivos (imagens)
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Cors** - Habilitação de CORS
- **Swagger** - Documentação da API
- **PDFKit** - Geração de PDFs
- **UUID** - Geração de identificadores únicos
- **Nodemon** - Auto-reload durante desenvolvimento

## 📁 Estrutura do Projeto

```
├── src/
│   ├── config/         # Configurações (banco de dados, upload)
│   ├── controllers/    # Lógica de negócio
│   ├── models/         # Modelos de dados
│   ├── routes/         # Rotas da API
│   └── database/       # Schema do banco de dados
├── uploads/           # Pasta para armazenar imagens
├── server.js          # Arquivo principal do servidor
└── package.json       # Dependências do projeto
```

## 🚀 Funcionalidades

### Marcas
- ✅ Cadastrar novas marcas de veículos
- ✅ Listar todas as marcas
- ✅ Upload de logos das marcas

### Veículos
- ✅ Cadastrar novos veículos
- ✅ Listar todos os veículos
- ✅ Buscar veículo por ID
- ✅ Atualizar informações de veículos
- ✅ Excluir veículos
- ✅ Upload de imagens dos veículos

## ⚙️ Como Executar

### Pré-requisitos
- Node.js instalado
- PostgreSQL instalado e configurado
- Arquivo `.env` com as variáveis de ambiente

### Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados executando o script SQL em `src/database/schema.sql`

4. Crie um arquivo `.env` na raiz do projeto com suas configurações

5. Execute o projeto:

**Modo desenvolvimento:**
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

## 📝 Endpoints da API

### Marcas
- `GET /marcas` - Lista todas as marcas
- `POST /marcas` - Cadastra uma nova marca
- `GET /marcas/:id` - Busca marca por ID

### Veículos
- `GET /veiculos` - Lista todos os veículos
- `GET /veiculos/:id` - Busca veículo por ID
- `POST /veiculos` - Cadastra um novo veículo
- `PUT /veiculos/:id` - Atualiza um veículo
- `DELETE /veiculos/:id` - Remove um veículo

## 📄 Documentação

A documentação completa da API está disponível via Swagger após iniciar o servidor.

## 👤 Autor

Carlos Augusto

---

⭐ Projeto desenvolvido para gerenciamento de loja de veículos
