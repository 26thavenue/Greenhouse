const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()

const app = express()

app.use(morgan('dev'));

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});