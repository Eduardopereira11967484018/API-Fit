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
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateNutritionController_1 = require("./controlles/CreateNutritionController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                nome: "Matheus",
                sexo: "Masculino",
                idade: 28,
                altura: 1.8,
                peso: 74,
                objetivo: "Hipertrofia",
                refeicoes: [
                    {
                        horario: "08:00",
                        nome: "Café da Manhã",
                        alimentos: ["2 fatias de pão integral", "2 ovos mexidos", "1 banana", "200ml de leite desnatado"],
                    },
                    {
                        horario: "10:00",
                        nome: "Lanche da Manhã",
                        alimentos: ["1 iogurte grego natural", "1 scoop de whey protein", "1 colher de sopa de granola"],
                    },
                    {
                        horario: "13:00",
                        nome: "Almoço",
                        alimentos: ["150g de frango grelhado", "1 xícara de arroz integral", "1 xícara de brócolis cozido", "Salada verde à vontade"],
                    },
                    {
                        horario: "16:00",
                        nome: "Lanche da Tarde",
                        alimentos: ["1 batata doce média", "1 scoop de whey protein"],
                    },
                    {
                        horario: "20:00",
                        nome: "Jantar",
                        alimentos: ["150g de carne vermelha magra", "1 xícara de batata doce cozida", "1 xícara de couve refogada", "Salada verde à vontade"],
                    },
                    {
                        horario: "22:00",
                        nome: "Lanche antes de dormir",
                        alimentos: ["200ml de leite desnatado", "1 scoop de caseína"],
                    },
                ],
                suplementos: ["Whey Protein", "Creatina", "BCAA", "Glutamina"],
            };
            return reply.send(data);
        }));
        fastify.post("/create", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateNutritionController_1.CreateNutritionController().handle(request, reply);
        }));
    });
}
