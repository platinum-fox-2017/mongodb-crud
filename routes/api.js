const routes = require('express').Router()
const { read, create, update, destroy } = require('../controllers/index.js')

routes.get('/books', read)
routes.post('/books', create)
routes.put('/books/:id', update)
routes.delete('/books/:id', destroy)

module.exports = routes;