# Sistema de Controle de Gastos Residenciais 🏡

![C#](https://img.shields.io/badge/C%23-3.5.6-642076?style=for-the-badge)
![.NET](https://img.shields.io/badge/.NET%20-8.0-4f2ace?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Enabled-028ddb?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/Postgres-16.0-7AADFF?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.17-0ed7f7?style=for-the-badge)
![Typescript](https://img.shields.io/badge/typescript-6.0.2-3074bf?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/tailwind-4.3.2-37b7f0?style=for-the-badge)

## 💰 Sobre
Aplicação desenvolvida como parte de um teste técnico para vaga de estágio.

O sistema permite cadastrar pessoas, registrar receitas e despesas, consultar o histórico de transações e visualizar um resumo financeiro individual e geral.

<br/>

## 🚀 Como executar o projeto

### Clone o repositório

```bash
git clone <https://github.com/liviadfsilva/SistemaDeGastosResidenciais>
```

### Execute com Docker

```bash
docker compose up --build
```

Após a inicialização:

| Serviço | Endereço |
|----------|-----------|
| Front-end | http://localhost:5173 |
| Back-end | http://localhost:8080 |

<br/>

## ✨ Funcionalidades

### 👤 Cadastro de Pessoas

- Cadastrar pessoas;
- Listar pessoas cadastradas;
- Excluir pessoas;
- Ao excluir uma pessoa, todas as suas transações também são removidas.

### 💸 Cadastro de Transações

- Registrar receitas e despesas;
- Associar uma transação a uma pessoa cadastrada;
- Impedir que menores de 18 anos cadastrem receitas;
- Visualizar todas as transações de uma pessoa.

### 📊 Resumo Financeiro

- Exibir o total de receitas de cada pessoa;
- Exibir o total de despesas de cada pessoa;
- Exibir o saldo individual (Receitas − Despesas);
- Exibir o total geral de receitas, despesas e saldo considerando todas as pessoas cadastradas.

<br/>

## ⭐ Diferenciais

Além dos requisitos propostos no desafio, foram implementadas algumas melhorias:

- Containerização completa da aplicação com Docker e Docker Compose;
- Interface responsiva desenvolvida com Tailwind CSS;
- Organização do front-end em componentes reutilizáveis;
- Separação das responsabilidades entre páginas, componentes, serviços e tipos.

<br/>

## 📂 Estrutura do Projeto

```text
.
├── back-end/
└── front-end/
```

<br/>

## 📌 Regras de Negócio

- Cada pessoa possui:
  - Nome;
  - Idade.

- Toda transação deve estar vinculada a uma pessoa cadastrada.

- Pessoas menores de 18 anos podem cadastrar apenas despesas.

- Ao excluir uma pessoa, todas as suas transações também são removidas.

- O resumo financeiro apresenta:
  - Total de receitas;
  - Total de despesas;
  - Saldo (Receitas − Despesas).

- Os dados permanecem persistidos após o encerramento da aplicação.

<br/>

## 🎨 Interface

A interface foi desenvolvida priorizando simplicidade e usabilidade.

O fluxo da aplicação foi organizado da seguinte forma:

1. Cadastro de pessoas;
2. Cadastro de transações;
3. Consulta das transações individuais;
4. Visualização do resumo financeiro geral.

<br/>

## 📸 Telas

- Tela inicial;

- Cadastro de transações;

- Detalhes da pessoa;

- Resumo financeiro.

<br/>

## 🌸 Autora
Desenvolvido por **Lívia Silva**

- GitHub: https://github.com/liviadfsilva 
- LinkedIn: https://linkedin.com/in/liviadfsilva
- Portfólio: https://liviadfsilva-portfolio.vercel.app/
