const {addBook,showBook,updateBook,deleteBook} = require('../models/books')

module.exports = {
    add(req,res){
        addBook(req,res)
    },
    show(req,res){
        showBook(req,res)
    },
    update(req,res){
        updateBook(req,res)
    },
    deleted(req,res){
        deleteBook(req,res)
    }
}