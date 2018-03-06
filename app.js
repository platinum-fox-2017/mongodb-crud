const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const books = require('./routes/books')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books',books)

app.listen(5000,()=>console.log('server up'))