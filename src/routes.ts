import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
  } from "fastify";
  import { CreateNutritionController } from "./controlles/CreateNutritionController";
  
  export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
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
    });
  
    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    });
  }
  