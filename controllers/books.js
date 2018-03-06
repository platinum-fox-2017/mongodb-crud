const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports = {
    insertBook: (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if(err){
                res.status(500).send('Error')
            } else {
                let book = db.db('library').collection('books')
                book.insertOne(req.body, (err, r) => {
                    if(err){
                        res.status(500).send('Error')
                    } else {
                        res.status(200).send('Success add book')
                    }
                })
            }
        })
    },
    getBooks: (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if(err){
                res.status(500).send('Error')
            } else {
                let book = db.db('library').collection('books')
                book.find().toArray().then(books => {
                    res.status(200).send({
                        message: 'List Books',
                        books
                    })
                })
            }
        })
    },
    deleteBook: (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if(err){
                res.status(500).send('Error')
            } else {
                let book = db.db('library').collection('books')
                book.deleteOne(req.body, (err, r) => {
                    if(err){
                        res.status(500).send('Error')
                    } else {
                        res.status(200).send('Success delete book')
                    }
                })
            }
        })
    },
    updateBook: (req, res) => {
        MongoClient.connect(url, (err, db) => {
            if(err){
                res.status(500).send('Error')
            } else {
                let book = db.db('library').collection('books')
                book.updateOne({title: req.body.title}, {$set : req.body}, {upsert: true}, (err, r) => {
                    if(err){
                        res.status(500).send('Error')
                    } else {
                        res.status(200).send('Success update book')
                    }
                })
            }
        })
    }
}