const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports ={
    showBook: (req, res)=>{
        MongoClient.connect(url, (err,client)=>{
            if (err) return res.status(500).send(err)
            const db = client.db('library')
            db.collection("books").find({}).toArray((err, result)=>{
                if(err){
                    return res.status(500).send('error');
                }else{
                    return res.status(200).send({
                        message : 'show all data',
                        result:result
                    })
                }
                db.close() 
            })
        })
    },
    showBookById: (req, res)=>{
        MongoClient.connect(url, (err,client)=>{
            if (err) return res.status(500).send(err)
            const db = client.db('library')
            db.collection("books").findOne({title:req.params.titleBook},(err, result)=>{
                if(err){
                    return res.status(500).send('error')
                }else{
                    return res.status(200).send({
                        message : 'show all data',
                        result:result
                    })
                }
                db.close() 
            })
        })
    },
    addBook:(req, res)=>{
        MongoClient.connect(url, (err, client)=>{
            if(err) return status(500).send('error')
            const db = client.db('library')
            let obj = {
                isbn : req.body.isbn,
                title : req.body.title,
                author : req.body.author,
                category : req.body.category,
                stock : req.body.stock
            }
            db.collection('books').insertOne(obj,(err, result)=>{
                if(err){
                    return res.status(500).send('error');
                }else{
                    return res.status(200).send({
                        message : 'new book created',
                        result
                    })
                }
                db.close()
            })
        })
    },
    editBook:(req, res)=>{
        MongoClient.connect(url, (err, client)=>{
            if(err) return status(500).send('error')
            const db = client.db('library')
            let obj = {
                $set:{
                    isbn : req.body.isbn,
                    title : req.body.title,
                    author : req.body.author,
                    category : req.body.category,
                    stock : req.body.stock
                }
            }
            let titleBook = {title:req.params.titleBook}
            db.collection('books').updateOne(titleBook, obj,(err, result)=>{
                if(err){
                    return res.status(500).send('error');
                }else{
                    return res.status(200).send({
                        message : 'book updated',
                        result
                    })
                }
                db.close()
            })
        })
    },
    deleteBook : (req, res)=>{
        MongoClient.connect(url, (err, client)=>{
            if(err) return status(500).send('error')
            const db = client.db('library')
            const titleBook = {title:req.params.title}
            db.collection('books').deleteOne(titleBook, (err, result)=>{
                if(err){
                    return res.status(500).send('error');
                }else{
                    return res.status(200).send({
                        message : 'book deleted',
                        result
                    })
                }
                db.close()
            })
        })
    }
}