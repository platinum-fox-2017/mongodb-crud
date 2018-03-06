const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

module.exports = {

    showData: (req, res) => {
        MongoClient.connect(url, (err,client) => {
            if(err) {
                res.status(500).send('error bang')
            } else {
                let data = client.db("library").collection('books');
                data.find()
                .toArray()
                .then(books => {
                    return res.status(200).send({
                        data    : books,
                        message : "here's your data"
                    })
                    db.close()
                })
            }
        })
    },

    insertData: (req,res) => {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                res.status(500).send('error bang')
            } else {
            let data = client.db("library").collection('books');
            data.insertOne(req.body, (err, r) => {
                if(err) {
                    res.status(500).send('error bang')
                } else {
                    res.status(201).send({
                        data    : req.body,
                        message : "successfully add data"
                    })
                }
            })
            }
          })
    },

    updateData: (req, res) => {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                res.status(500).send('error bang')
            } else {
            let data = client.db("library").collection('books');
            data.findOneAndUpdate({title: req.body.title}, {$set: req.body}, {upsert: true}, (err,r) => {
                if(err) {
                    res.status(500).send('error bang')
                } else {
                    res.status(201).send({
                        data    : req.body,
                        message : "sucessfully update data"
                    })
                }
            })
            }
        })
    },

    deleteData: (req,res) => {
        MongoClient.connect(url, (err, client) => {
            if(err) {
                res.status(500).send('error bang')
            } else {
                let data = client.db("library").collection('books');
                data.deleteOne({title: req.body.title}, (err,r) => {
                    if(err) {
                        res.status(500).send('error bang')
                    } else {
                        res.status(201).send('data has been deleted')
                    }
                })
            }
        })
    }
}