const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const ObjectID = require('mongodb').ObjectID

module.exports = {
    viewBook (req, res) {
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            let dbo = db.db("library");
            dbo.collection("myCollection").find({}).toArray(function (err, data) {
                if (err) throw err;
                res.status(200).json({message: 'Data Found!', data})
                db.close();
            });
        });
    },
    addBook (req, res) {
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            var dbo = db.db("library");
            var bookObj = { 
                isbn: req.body.isbn,
                title: req.body.title, 
                author: req.body.author, 
                category: req.body.category, 
                stock: req.body.stock 
            };
            dbo.collection("myCollection").insertOne(bookObj, function (err, data) {
                if (err) throw err;
                res.status(201).json({message: "Book data inserted", data});
                db.close();
            });
        });
    },
    updateBook (req, res) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("library");
            var myquery = { _id: ObjectID(req.params.id) };
            var newvalues = { $set: { 
                isbn: req.body.isbn, 
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock 
            } };
            dbo.collection("myCollection").updateOne(myquery, newvalues, function (err, result) {
                if (err) throw err;
                res.status(200).json({ message: "Book data updated!", result})
                db.close();
            });
        });
    },
    deleteBook (req, res) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("library");
            var myquery = { _id: ObjectID(req.params.id) };
            dbo.collection("myCollection").deleteOne(myquery, function (err, obj) {
                if (err) throw err;
                res.status(200).json({ message: "Book data deleted!", obj})
                db.close();
            });
        });
    }
}
