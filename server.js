// server.js
const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dummy model function - replace with your own TensorFlow.js model
const chatbotModel = async (input) => {
  // For demonstration purposes, we'll just return a static response.
  return "I'm an AI-powered chatbot. How can I assist you today?";
};

app.post('/api/chat', async (req, res) => {
  const userInput = req.body.input;

  // Call the TensorFlow.js model
  const response = await chatbotModel(userInput);

  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
