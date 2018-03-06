const Router = require('express').Router()
const books  = require('../controllers/books')

Router.get('/', books.getBooks)
Router.get('/:id', books.getBooksById)
Router.post('/',  books.createBooks)
Router.put('/:id', books.updateBooks)
Router.delete('/:id', books.deleteBooks)

module.exports = Router;
