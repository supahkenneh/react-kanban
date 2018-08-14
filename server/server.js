const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3005;

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, (req, res) => {
  console.log(`Server started on port: ${PORT}`);
});