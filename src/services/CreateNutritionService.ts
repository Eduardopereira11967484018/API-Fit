
import { DataProps } from '../controlles/CreateNutritionController'
import { GoogleGenerativeAI } from '@google/generative-ai'

class CreateNutritionService {
  async execute({ name, age, gender, height, level, objective, weight, frequency }: DataProps){
    
    try{
      const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})

      const response = await model.generateContent(`Crie um treino completo para uma pessoa com nome: ${name} do sexo ${gender} com peso atual: ${weight}kg, altura: ${height}, idade: ${age} anos e com foco e objetivo em ${objective}, atualmente nível de atividade: ${level} e ignore qualquer outro parâmetro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, propriedade treinos com uma array contendo dentro cada objeto sendo um treino do plano e dentro de cada treino a propriedade horario com o horário do treino, propriedade tipo com o tipo de treino, propriedade frequencia indicando a frequência semanal para esse treino, propriedade exercicios com uma array contendo os exercícios desse treino, cada exercício com as propriedades nome, series, repeticoes, e descanso. Pode incluir uma propriedade como equipamentos contendo array com sugestão de equipamentos necessários para o objetivo dessa pessoa. Não retorne nenhuma observação além das passadas no prompt. Retorne em json e nenhuma propriedade pode ter acento.`)

      console.log(JSON.stringify(response, null, 2));

      if(response.response && response.response.candidates){
        const jsonText = response.response.candidates[0]?.content.parts[0].text as string;

        //Extrair o JSON
        let jsonString = jsonText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

        let jsonObject = JSON.parse(jsonString)

        return { data: jsonObject }
      }


    }catch(err){
      console.error("Erro JSON: ", err)
      throw new Error("Failed create.")
    }
    
    
  }
}

export { CreateNutritionService }