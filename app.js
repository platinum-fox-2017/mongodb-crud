const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/books');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/books',books);

const port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`App listening on port ${port}`);
});
