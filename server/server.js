const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3005;

const routes = require('./routes');

app.use(bodyParser.json());
app.use('/api', routes)


app.listen(PORT, (req, res) => {
  console.log(`Server started on port: ${PORT}`);
});

//refactor components