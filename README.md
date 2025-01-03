﻿# API-Fit
# FitDiet - Back-End

## Descrição
O back-end do projeto **FitDiet** é responsável por gerenciar dados relacionados a planos alimentares e objetivos nutricionais. Desenvolvido com o framework **Fastify**, o sistema é eficiente, modular e utiliza TypeScript para maior segurança e escalabilidade no código.

---

## Tecnologias Utilizadas

### Frameworks e Bibliotecas
- [**Fastify**](https://www.fastify.io/): Framework web focado em desempenho e simplicidade.
- [**CORS**](https://www.npmjs.com/package/cors): Middleware para habilitar o compartilhamento de recursos entre origens diferentes.
- [**TSX**](https://www.npmjs.com/package/tsx): Ferramenta para executar códigos TypeScript sem necessidade de compilação explícita.
- [**Dotenv**](https://www.npmjs.com/package/dotenv): Biblioteca para gerenciar variáveis de ambiente de forma simples e segura.

### Dependências de Desenvolvimento
- [**TypeScript**](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática ao código.
- [**@types/cors**](https://www.npmjs.com/package/@types/cors): Tipagens para o pacote CORS, facilitando o uso com TypeScript.

### Gemini AI da Google
Para integração futura de IA no projeto, será explorada a [**Gemini AI**](https://ai.google/) da Google, que oferece soluções de inteligência artificial de ponta.

---

## Instalação e Configuração

### 1. Clonar o Repositório
```bash
$ git clone <URL_DO_REPOSITORIO>
$ cd fitdiet-app/back-end
```

### 2. Instalar Dependências
Execute os comandos abaixo para instalar todas as dependências necessárias:
```bash
$ npm install
$ npm install --save-dev @types/cors typescript
```

### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do diretório e configure as variáveis de ambiente necessárias:
```env
PORT=3333
```

### 4. Executar o Servidor
Utilize o comando abaixo para iniciar o servidor:
```bash
$ npx tsx src/index.ts
```

---

## Estrutura do Projeto

```
fitdiet-app/back-end/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── CreateNutritionController.ts
│   ├── routes/
│   │   ├── nutritionRoutes.ts
│   │   └── healthCheck.ts
│   ├── services/
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## Endpoints Principais

### 1. Teste de Conexão
- **Rota:** `GET /teste`
- **Descrição:** Verifica se o servidor está funcionando corretamente.

### 2. Criação de Dados Nutricionais
- **Rota:** `POST /create`
- **Descrição:** Permite criar um novo registro de plano alimentar e suplementos.

---

## Links Importantes

### Frameworks e Bibliotecas
- [Fastify](https://www.fastify.io/)
- [CORS](https://www.npmjs.com/package/cors)
- [TSX](https://www.npmjs.com/package/tsx)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [TypeScript](https://www.typescriptlang.org/)
- [@types/cors](https://www.npmjs.com/package/@types/cors)

### Inteligência Artificial
- [Gemini AI da Google](https://ai.google/)

---

## Licença
Este projeto está licenciado sob a licença ISC. Consulte o arquivo `LICENSE` para mais informações.

