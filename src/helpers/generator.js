const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const generator = {};

// Set up your OpenAI API credentials
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function askMeAnything(pregunta) {
  console.log("preguntando");
  const prompt = `Responde la siguiente pregunta sobre programación como si fueras un anciano sabio y ancestral con millones de conocimientos: "${pregunta}". Si la pregunta no es de programación, responde que deben buscar ese conocimiento en otro lado.`;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(response.data.choices[0].message);
  return response.data.choices[0].message;
}

generator.askMeAnything = askMeAnything;

module.exports = generator;
