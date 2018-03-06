const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

class Books_Controller{
  static add_new_book(req,res,next){
    MongoClient.connect(url,(err, db) => {
      if(err){
        res.status(500).json({
          message:`Error connecting to the database`
        })
      } else {
        let dbo = db.db('library');
        let new_book ={};
        new_book.isbn = req.body.isbn;
        new_book.title = req.body.title;
        new_book.author = req.body.author;
        new_book.category = req.body.category;
        new_book.stock = req.body.stock;
        dbo.collection('books').insertOne(new_book,(err2,res2)=>{
          if(err2){
            res.status(500).json({
              message:`New book couldn't be added`
            })
          } else {
            res.status(201).json({
              message:`New book was added`
            })
            db.close();
          }
        })
      }
    })
  }
  static get_all_books(req,res,next){
    MongoClient.connect(url,(err, db)=>{
      if(err){
        res.status(500).json({
          message:`Error connecting to the database`
        })
      } else {
        let dbo = db.db('library');
        dbo.collection('books').find({}).toArray((err2,res2)=>{
          if(err2){
            res.status(500).json({
              message:`Books data couldn't be fetched`
            })
          } else {
            res.status(200).json({
              res2:res2,
              message: 'Books data'
            })
            db.close();
          }
        })
      }
    })
  }
  static update_a_book(req,res,next){
    var ObjectId = require('mongodb').ObjectID;
    let id = ObjectId(req.params.id)
    let query = {
      _id: id
    }
    let new_values = {
      $set:{
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    }
    MongoClient.connect(url,(err,db)=>{
      if(err){
        res.status(500).json({
          message:`Error connecting to the database`
        })
      } else {
        let dbo = db.db('library');
        dbo.collection('books').updateOne(query,new_values,(err2,res2)=>{
          if(err2){
            res.status(500).json({
              message:`Book couldn't be updated`
            })
          } else {
            res.status(200).json({
              message:`Book was updated`
            })
          }
        })
      }
    })
  }
  static delete_a_book(req,res,next){
    var ObjectId = require('mongodb').ObjectID;
    let id = ObjectId(req.params.id)
    let title_to_delete = {}
    title_to_delete._id = id;
    MongoClient.connect(url,(err,db)=>{
      if(err){
        res.status(500).json({
          message:`Error connecting to the database`
        })
      } else {
        let dbo = db.db('library');
        dbo.collection('books').deleteOne(title_to_delete,(err2,obj)=>{
          if(err2){
            res.status(500).json({
              message:`Book couldn't be deleted`
            })
          } else {
            res.status(200).json({
              message:`Book was deleted`
            })
            db.close();
          }
        })
      }
    })
  }
}

module.exports = Books_Controller;
