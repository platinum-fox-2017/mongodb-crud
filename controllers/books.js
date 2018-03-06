const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/"
module.exports ={
  getBooks :(req,res)=>{
    MongoClient.connect(url,(err,client)=>{
      if(err){
        return res.status(500).send('connection error')
      }else{
        const db = client.db('library')
        db.collection('books').find({}).toArray().then(data=>{
          res.status(200).send({
            message : "books are found",
            books:data
          })
        })
      }
  
    })
  },
  insertBooks : (req,res)=>{
    MongoClient.connect(url,(err,client)=>{
      if(err){
        res.status(500).send('connection error')
      }else{
        const book = client.db('library').collection('books')
        book.insertOne(req.body,(error,d)=>{
          if(error){
            res.status(500).send({
              message:"error"
            })
          }else{
            res.status(201).send({
              message:"success",
              new: req.body
            })
          }
        })
      }
    })
  },
  editBooks : (req,res)=>{
    MongoClient.connect(url,(err,client)=>{
      if(err){
        res.status(500).send('connection error')
      }else{
        const book = client.db('library').collection('books')
        let column = {title:req.body.title}
        let newData = {$set :req.body}
        book.updateOne(column,newData,(error,d)=>{
          if(error){
            res.status(500).send({
              message:"book not found"
            })
          }else{
            res.status(200).send({
              message:"data updated"
            })
          }
        })
      }
    })
  },
  deleteBooks:(req,res)=>{
    MongoClient.connect(url,(err,client)=>{
      if(err){
        res.status(500).send('connection error')
      }else{
        const book = client.db('library').collection('books')
        let column = {title:req.body.title}
        book.deleteOne(column,(error,d)=>{
          if(error){
            res.status(500).send({
              message : 'book not found'
            })
          }else{
            res.status(200).send({
              message:'book deleted'
            })
          }
        })
      }
    })
  }
}