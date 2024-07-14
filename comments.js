// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new comments array
const comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  comments.push(body);
  res.send({ success: true });
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});