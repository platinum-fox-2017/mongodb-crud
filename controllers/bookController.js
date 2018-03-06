'use strict'
// open database here
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

// connection URL
const url = 'mongodb://localhost:27017';

// db Name
const dbName = 'library';


class BookController {

  static createBook(req, res) {
    // return res.send('create book');
    // connect to db
    MongoClient.connect(url, function(err, client){
      if (err) {
        return res.status(500).send(err);
      }

      const db =  client.db(dbName);
      let data = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
      // insert data to collection
      db.collection('books').insertOne(data, function(err, r){
        if (err) {
          return res.status(500).send(err);
        }
        res.status(201).json({
          message: 'data is created',
          newData: data
        })
        client.close();
      })


    })
  }

  static readBook(req, res) {
    // return res.send('read all book');
    MongoClient.connect(url, function(err, client){
      if (err) {
        return res.status(500).send(err);
      }
      const db =  client.db(dbName);
      console.log('database connection succesful');
      db.collection('books')
        .find()
        .limit(10)
        .toArray(function(err,foundBooks){
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).json({
            message:'found books',
            foundBooks: foundBooks
          })
          client.close();
      })
    })
  }

  static readOneBook(req, res) {
    // return res.send('read all book');
    MongoClient.connect(url, function(err, client){
      if (err) {
        return res.status(500).send(err);
      }
      const db =  client.db(dbName);
      console.log('database connection succesful');
      db.collection('books')
        .find({_id: ObjectID(req.params._id)})
        .limit(1)
        .toArray(function(err,foundBooks){
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).json({
            message:'found books',
            foundBooks: foundBooks
          })
          client.close();
      })
    })
  }

  static updateBook(req, res) {
    // res.send('update a book');
    MongoClient.connect(url, function(err, client){
      if (err) {
        return res.status(500).send(err);
      }
      const db =  client.db(dbName);

      let updateData = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }

      console.log('database connection succesful');
      db.collection('books')
        .updateOne(
          {_id: ObjectID(req.params._id)},
          { $set: updateData },
          function(err, r){
            if (err) {
              return res.status(500).send(err);
            }
            res.status(200).json({
              message:'edited books',
              updateData: updateData,
              r: r
            })
            client.close();
          }
        )
      }
    )

  }

  static deleteBook(req, res) {
    // res.send('delete a book');
    MongoClient.connect(url, function(err, client){
      if (err) {
        return res.status(500).send(err);
      }
      const db =  client.db(dbName);

      db.collection('books')
        .findOne({_id: ObjectID(req.params._id)}, function(err, foundBook){
          db.collection('books')
            .deleteOne({_id: ObjectID(req.params._id)}, function(err,r){
              res.status(200).json({
                message:'deleted book',
                deletedData: foundBook,
                r: r
              })
              client.close();
            }
          )
      })

    })
  }

}


module.exports = {
  BookController: BookController
};
