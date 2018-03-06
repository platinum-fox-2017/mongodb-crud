const Model = require('../models/book.model')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports ={
    showBook: (req, res)=>{
        Model.showBook(req, res)
    },
    addBook:(req, res)=>{
        Model.addBook(req,res)
    },
    editBook:(req,res)=>{
        Model.editBook(req, res)
    },
    deleteBook:(req,res)=>{
        Model.deleteBook(req, res)
    }
}
