const books = require('../models/books')

module.exports.getBooks = function(req, res) {
  books.findAll(function(books) {
    res.status(200).json({
      message : 'Success',
      books   : books,
    })
  })
}

module.exports.getBooksById = function(req, res) {
  books.findById(req.params.id, (err, book) => {
    if (!err) {
      res.status(200).json({
        message : 'Data found',
        book    : book,
      })
    } else {
      res.status(500).json({
        message : 'Data not found !'
      })
    }
  })
}

module.exports.createBooks = function(req, res) {
  let objBook = {
    isbn    : req.body.isbn,
    title   : req.body.title,
    author  : req.body.author,
    category: req.body.category,
    stock   : req.body.stock,
  }

  books.create(objBook, (err, result) => {
    if (!err) {
      res.status(200).json({
        message : 'Success to insert record',
        result  : result,
      })
    } else {
      res.status(500).json({
        message : 'Fail to insert record !',
        result  : err.message,
      })
    }
  })
}

module.exports.updateBooks = function(req, res) {
  let objBook = {
    isbn    : req.body.isbn,
    title   : req.body.title,
    author  : req.body.author,
    category: req.body.category,
    stock   : req.body.stock,
  }

  books.update(req.params.id, objBook, (err, result) => {
    if (!err) {
      res.status(200).json({
        message : 'Success to update record',
        result  : result,
      })
    } else {
      res.status(500).json({
        message : 'Fail to update record !',
        result  : err.message,
      })
    }
  })
}

module.exports.deleteBooks = function(req, res) {
  books.delete(req.params.id, (err, result) => {
    if (!err) {
      res.status(200).json({
        message : 'Success to delete record',
        result  : result,
      })
    } else {
      res.status(500).json({
        message : 'Fail to delete record !',
        result  : err.message,
      })
    }
  })
}
