"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
dotenv_1.default.config();
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
const app = (0, fastify_1.default)({
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
app.register(cors_1.default, corsOptions);
app.register(routes_1.routes);
// Middleware para logar cada requisição
app.addHook('onRequest', (request, reply, done) => {
    request.log.info(`Incoming request: ${request.method} ${request.url}`);
    done();
});
// Tratamento de erros de forma personalizada
app.setErrorHandler((error, request, reply) => {
    // Log de erro detalhado
    request.log.error(error);
    // Resposta estruturada com código de erro específico
    if (error.statusCode === 404) {
        reply.status(404).send({
            error: 'Not Found',
            message: error.message,
        });
    }
    else {
        reply.status(500).send({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
});
// Função de inicialização do servidor
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen({ port: 3333, host: "0.0.0.0" });
        console.log(`Servidor iniciado na porta http://localhost:3333`);
    }
    catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1); // Forçar a saída do processo se o servidor não iniciar
    }
});
start(); // Inicia o servidor
