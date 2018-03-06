const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

class BooksModel {
  static model_create(req,res) {
    MongoClient.connect(url, function(err, client) {
      if (err) {
        res.status(500).send('error bosku')
      }
      else {
        const data = client.db('library').collection('books')
        data.insertOne(req.body, (err, r) => {
          if (err) {
            return res.status(500).send('error')
          }
          else {
            return res.status(200).send(r)
          }
        })
      }
    })
  }

  static model_showData(req, res) {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        return res.status(500).send('error bosku')
      }
      else {
        const db = client.db('library')
        db.collection('books').find().toArray().then(data_books => {
          return res.status(200).send(data_books)
          db.close()
        })
      }
    })
  }

  static model_editData(req, res) {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        return res.status(500).send('error bosku')
      }
      else {
        const db = client.db('library')
        db.collection('books').update({ title : req.body.title },{$set: {category : req.body.category}},null, (err, r) => {
          if (err) {
            return res.status(500).send('error')
          }
          else {
            return res.status(200).send(r)
          }
        })
      }
    })
  }

  static model_deleteData(req, res) {
    MongoClient.connect(url, function (err, client) {
      if (err) {
        return res.status(500).send('error')
      }
      else {
        const db = client.db('library')
        db.collection('books').deleteOne({ title : req.body.title }, (err, r) => {
          if (err) {
            return res.status(500).send('error')
          }
          else {
            return res.status(200).send(r)
          }
        })
      }
    })
  }
}

module.exports = BooksModel
