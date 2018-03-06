const model = require('../models/books.models')

module.exports = {
    allBooks: function (req, res){
        // console.log('masuk')
        model.findAll()
            .then(books => {
                console.log(books)
                res.status(200).send(books)
            })
            .catch((err) => {
                res.status(404).send(err)
            }) 
    },
    insertBook: function (req, res){
        model.create(req.body)
            .then(book => {
                res.status(200).json({
                    message: "book sucessfully added",
                    book: book
                })
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },
    editBook: function (req, res){

        model.update(req.params.bookId, req.body)
            .then(result => {
                res.status(200).json({
                    message: `bookId ${req.params.bookId} has been successfully updated`,
                    book: result
                })
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },
    removeOne: function (req, res){
        model.delete(req.params.bookId)
            .then(result => {
                res.status(200).json({
                    message: `bookId ${req.params.bookId} has been successfully deleted`,
                    book: result
                })
            })
            .catch(err => {
                res.status(404).send(err)
            })
    }

}