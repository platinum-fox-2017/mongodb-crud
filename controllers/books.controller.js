// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'library';
const books = require('../models/books.model');


module.exports = {
    findAllBooks : (req, res) => {
        books.findAll()
            .then(books => {
                res.status(200).json({
                    message:'Books found',
                    data: books
                });
            }).catch(err => {
                return res.status(500).json({
                    message: "Not connected to database"
                });
            })
    },

    addBook : (req, res) => {
        books.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }).then((book) => {
            res.status(200).json({
                message:'Succeed add new book',
                data: book
            });
        }).catch(err => {
            return res.status(500).json({
                message: "Not connected to database"
            });
        })
    },

    deleteBook : (req, res) => {
        books.destroy(req.params.id)
            .then(() => {
                res.status(200).json({
                    message:'Succeed delete book'
                });
            }).catch(err => {
                return res.status(500).json({
                    message: "Not connected to database"
                });
            });
    },

    findBookById : (req, res) => {
        books.findById(req.params.id)
        .then(book => {
            res.status(200).json({
                message:'Book found',
                data: book
            });
        }).catch(err => {
            return res.status(500).json({
                message: "Not connected to database"
            });
        })
    },

    updateBook : (req, res) => {
        books.update(req.params.id,req.body)
        .then(book => {
            res.status(200).json({
                message:'Book updated',
                data: book
            });
        }).catch(err => {
            return res.status(500).json({
                message: "Not connected to database"
            });
        })
    },

}
