const BooksModel = require('../models/booksModel');

class Books {

  static create(req, res) {
    BooksModel.model_create(req,res)
  }

  static showData(req, res) {
    BooksModel.model_showData(req, res)
  }

  static editData(req, res) {
    BooksModel.model_editData(req, res)
  }

  static deleteData(req, res) {
    BooksModel.model_deleteData(req, res)
  }
}


module.exports = Books
