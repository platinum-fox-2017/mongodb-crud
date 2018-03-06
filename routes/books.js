const express = require('express')
const books = express.Router()
const bookController = require('../controllers/books.controller')

books.get('/', bookController.allBooks)
books.post('/', bookController.insertBook)
books.put('/:bookId', bookController.editBook)
books.delete('/:bookId', bookController.removeOne)


module.exports = books