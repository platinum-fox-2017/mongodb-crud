const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

module.exports = {
    addBook(req,res){
        MongoClient.connect(url, function(err, client) {
            if(err) {
                return res.status(500).send(err)
            }else{
                const db = client.db('library')
                db.collection('books').insert(req.body,(err,r)=>{
                    if(err) return res.status(500).send(err)
                    res.status(200).send({
                        message : 'success add',
                        data : r
                    })
                })
            }
        })
    },
    showBook(req,res){
        MongoClient.connect(url, function(err, client) {
            if(err) {
                return res.status(500).send(err)
            }else{
                const db = client.db('library')
                db.collection('books').find().toArray((err,r)=>{
                    if(err) return res.status(500).send(err)
                    res.status(200).send({
                        message : 'all Data',
                        data : r
                    })
                })
            }
        })
    },
    updateBook(req,res){
        MongoClient.connect(url, function(err, client) {
            if(err) {
                return res.status(500).send(err)
            }else{
                const db = client.db('library')
                db.collection('books').update({
                    title:req.body.findtitle
                },{
                    $set:{
                        isbn    : req.body.isbn,
                        title   : req.body.title,
                        author  : req.body.author,
                        category: req.body.category,
                        stock   : req.body.stock 
                    }
                },null,(err,r)=>{
                    if(err) return res.status(500).send(err)
                    res.status(200).send({
                        message : 'data success to update',
                        data : r
                    })
                })
            }
        })
    },
    deleteBook(req,res){
        MongoClient.connect(url, function(err, client) {
            if(err) {
                return res.status(500).send(err)
            }else{
                const db = client.db('library')
                db.collection('books').deleteOne({title:req.body.findtitle}
                ,(err,r)=>{
                    if(err) return res.status(500).send(err)
                    res.status(200).send({
                        message : 'data success to delete',
                        data : r
                    })
                })
            }
        })
    }
}