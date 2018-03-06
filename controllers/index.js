const books = require('../models/books')

module.exports = {
  read: (req, res) => {
    books.read()
      .then((data) => {
        res.status(201).json({
          message: 'Getting all datas',
          data: data
        })
      }).catch(err => {
        res.status(400).json({
          message: err.message
        })
      })
  },

  create: (req, res) => {
    books.insertOne(req.body)
      .then((book) => {
        res.status(201).json({
          message: 'Adding new book success',
          book: book
        })
      }).catch(err => {
        res.status(400).json({
          message: err.message
        })
      })
  },

  update: (req, res) => {
    let id = req.params.id
    books.update(id, req.body)
      .then(book => {
        res.status(201).json({
          message: 'Update Success!',
          book: book
        })
      }).catch(err => {
        res.status(400).json({
          message: err.message
        })
      })
  },

  destroy: (req, res) => {
    let id = req.params.id
    books.deleteOne(id)
      .then(book => {
        res.status(201).json({
          message: 'Delete success!',
          book: book
        })
      }).catch(err => {
        res.status(400).json({
          message: err.message
        })
      })
  }
}