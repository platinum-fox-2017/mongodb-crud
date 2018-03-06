const {
    showAllBooksModel,
    insertBookModel,
    updateBookModel,
    deleteBookModel
} = require('../models/books.model')

const showAllBooks = (req, res) => {
    showAllBooksModel(req, res)
}

const insertBook = (req, res) => {
    insertBookModel(req, res)
}

const updateBook = (req, res) => {
    updateBookModel(req, res)
}

const deleteBook = (req, res) => {
    deleteBookModel(req, res)
}



module.exports = {
    showAllBooks,
    insertBook,
    updateBook,
    deleteBook
}