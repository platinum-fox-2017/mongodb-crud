var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";

module.exports = {
    showData: (req,res) => {
        MongoClient.connect(url, function (err, db) {
            if(err) throw err;
            var dbo = db.db("library");

            dbo.collection("books").find().toArray(function (err, result) {
                if (err) throw err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    insertData: (req,res) => {
        MongoClient.connect(url, function (err, db) {

            if (err) throw err;
            var dbo = db.db("library");

            let addObj = {
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            }

            dbo.collection("books").insertOne(addObj, function (err, result) {
                if (err) throw err;
                res.status(201).json({
                    meseage: "Added Books",
                    addObj
                })
                db.close();
            });
        });
    },
    updateData: (req,res) => {
        MongoClient.connect(url, function (err, db) {

            if (err) throw err;
            var dbo = db.db("library");

            let idUpdate = {
                "_id": ObjectId(req.body._id)
            }
            let contentUpdate = {
                $set: {
                    title: req.body.title,
                    author: req.body.author,
                    category: req.body.category,
                    stock: req.body.stock
                }
            }
            dbo.collection("books").updateOne(idUpdate, contentUpdate, function (err, result) {
                if (err) throw err;
                res.status(200).json({
                    meseage: "Update Success",
                    result
                })
                db.close();
            });
        })
    },
    deleteData: (req,res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("library");
            let deleteObj = {
                "_id": ObjectId(req.body._id)
            }

            dbo.collection("books").deleteOne(deleteObj, function (err, obj) {
                if (err) throw err;
                res.status(200).json({
                    meseage: "Delete Success",
                    obj
                })
                db.close();
            })
        })
    }
}