// server.js
const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let model;

const loadModel = async () => {
  model = await use.load();
};

const chatbotModel = async (input) => {
  const embeddings = await model.embed([input]);
  const response = "I'm an AI-powered chatbot. How can I assist you today?"; // Placeholder response
  return response;
};

app.post('/api/chat', async (req, res) => {
  const userInput = req.body.input;
  const response = await chatbotModel(userInput);
  res.json({ response });
});

loadModel().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
