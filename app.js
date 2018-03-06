const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))



const booksRoute = require('./routes/books')

app.use('/books', booksRoute)

app.listen(3000, () => console.log('Example app listening on port 3000!'))