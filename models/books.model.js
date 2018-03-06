const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const ObjectId = require('mongodb').ObjectId

const showAllBooksModel = (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        const db = client.db('library')
        db.collection('books').find().toArray().then((datas) => {
            res.status(200).send(datas)
        })
    })
}

const insertBookModel = (req, res) => {
    const body = req.body
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(err)
        } else {
            const db = client.db('library')
            db.collection('books').insertOne({
                    isbn: body.isbn,
                    title: body.title,
                    author: body.author,
                    category: body.category,
                    stock: body.stock
                })
                .then(function (result) {
                    // process result
                    res.status(201).send(result)
                })
        }
    })
}

const updateBookModel = (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(err)
        } else {
            const db = client.db('library')
            db.collection('books').updateOne({
                "_id": ObjectId(req.params.id)
            }, {
                $set: {
                    isbn: req.body.isbn,
                    title: req.body.title,
                    author: req.body.author,
                    category: req.body.category,
                    stock: req.body.stock
                }
            }).then((data) => {
                res.status(201).send(data)
            })
        }
    })
}

const deleteBookModel = (req, res) => {
    const title = req.body.title
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(err)
        } else {
            const db = client.db('library')
            db.collection('books').deleteOne({
                    "_id": ObjectId(req.params.id)
                })
                .then(function (result) {
                    // process result
                    res.status(202).send(result)
                })
        }
    })
}

module.exports = {
    showAllBooksModel,
    insertBookModel,
    updateBookModel,
    deleteBookModel
}