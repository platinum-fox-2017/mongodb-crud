var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

class Customers {
  constructor() {

  }

  static viewCustomers(req,res,next){
    MongoClient.connect(url, function(err, db) {
      if (err){
        res.status(404).json({
          message:'error when connecting to database'
        })
      }
      let dbo = db.db("library");
      dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err){
          res.status(400).json({
            message:'error when reading customers data'
          })
        } else {
          res.status(200).send({
            message:'this is library customers list',
            data:result
          })
        }
        db.close();
      });
    });
  }

  static addCustomers(req,res,next){
    MongoClient.connect(url, function(err, db) {
    if (err){
      res.status(404).json({
        message:'error when connecting to database'
      })
    }
    var dbo = db.db("library");
    var myobj = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode : req.body.zipcode,
      phone : req.body.phone
    };
    dbo.collection("customers").insertOne(myobj, function(err, result){
      if (err){
        res.status(400).json({
          message:'error when adding customer'
        })
      } else {
        res.status(200).json({
          message:'successfully adding 1 customer',
          data:myobj
        })
      }
      db.close();
      });
    });
  }
  //
  static updateCustomers(req,res,next){
    MongoClient.connect(url, function(err, db) {
      if (err){
        res.status(404).json({
          message:'error when connecting to database'
        })
      } else {
        var dbo = db.db("library");
        var myquery = { name: req.body.nameSearch };
        var newvalues = { $set:
          {
          name: req.body.name,
          memberid: req.body.memberid,
          address: req.body.address,
          zipcode : req.body.zipcode,
          phone : req.body.phone
          }
        };
        dbo.collection("customers").updateOne(myquery, newvalues, function(err, result) {
          if (err){
            res.status(404).json({
              message:'error when updating data'
            })
          } else {
            res.status(200).json({
              message:'document is sucessfully updated',
              data: newvalues
            })
          }
          db.close();
        })
      }
    })
  }
  //
  static deleteCustomers(req,res,next){
    MongoClient.connect(url, function(err, db) {
      if (err){
        res.status(404).json({
          message:'error when connecting to database'
        })
      }
      var dbo = db.db("library");
      var myquery = {
         name: req.body.name
       };
      dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err){
          res.status(404).json({
            message:'error when deleting data'
          })
        } else {
          res.status(200).json({
            message:'sucessfully deleting data'
          })
          db.close();
        }
      });
    });
  }

}

module.exports = Customers;
