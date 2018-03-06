const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const url ='mongodb://localhost:27017';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router_main = require('./routes/books');

app.use('/books',router_main);

app.listen(3000,()=>console.log(`Running on port 3000`));
