import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from './routes';
import pino from 'pino';
import { FastifyError } from 'fastify';

dotenv.config();

// Middleware para verificação de variáveis de ambiente obrigatórias
const checkEnvVars = () => {
  const requiredEnvVars = ['API_KEY']; // Adicione suas variáveis obrigatórias aqui
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Missing environment variable: ${varName}`);
    }
  });
};

checkEnvVars(); // Chama para validar variáveis de ambiente

const app = Fastify({
  logger: {
    level: 'info', // Nível de log
    transport: {
      target: 'pino-pretty', // Usando pino-pretty para formatação
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

// Configuração de CORS
const corsOptions = {
  origin: "*", // Permitir qualquer origem, altere conforme necessário
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Registrar CORS e rotas
app.register(cors, corsOptions);
app.register(routes);

// Middleware para logar cada requisição
app.addHook('onRequest', (request, reply, done) => {
  request.log.info(`Incoming request: ${request.method} ${request.url}`);
  done();
});

// Tratamento de erros de forma personalizada
app.setErrorHandler((error: FastifyError, request, reply) => {
  // Log de erro detalhado
  request.log.error(error);

  // Resposta estruturada com código de erro específico
  if (error.statusCode === 404) {
    reply.status(404).send({
      error: 'Not Found',
      message: error.message,
    });
  } else {
    reply.status(500).send({
      error: 'Internal Server Error',
      message: error.message,
    });
  }
});

// Função de inicialização do servidor
const start = async () => {
  try {
    await app.listen({ port: 3333, host: "0.0.0.0" });
    console.log(`Servidor iniciado na porta http://localhost:3333`);
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1); // Forçar a saída do processo se o servidor não iniciar
  }
};

start(); // Inicia o servidor
