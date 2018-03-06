const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert')
const ObjectID    = require('mongodb').ObjectID;
const url         = 'mongodb://localhost:27017';

const dbName      = 'library';

module.exports    = {
    seed : () => {
        return new Promise((resolve,reject) => {
            MongoClient.connect(url, (err,client) => {
                if(err) {
                    reject(err)
                }
    
                console.log('connected to mongo server correctly !')
    
                let db = client.db(dbName)
    
                db.collection('books').insertMany([
                    {
                        isbn : "978-1-60309-057-5",
                        titlte : "Dragon Puncher",
                        author : "James Kochalka",
                        category : "All Ages",
                        stock   : 3
                    },
                    {
                        isbn : "978-1-891830-77-8",
                        titlte : "Every Girl is the End of the World for Me",
                        author : "Jeffrey Brown",
                        category : "Mature (16+)",
                        stock   : 5
                    },
                ], (err, r) => {
                    if (err) {
                        reject(err)
                    }
    
                    resolve(r)
                    client.close();
                })
            })
        })
    },

    createBooks : (newData) => {
        return new Promise((resolve,reject) => {
            MongoClient.connect(url,(err,client) => {
                if (err) {
                    reject(err)
                }
    
                let db = client.db(dbName)
    
                db.collection('books').insert({
                    isbn : newData.isbn,
                    title : newData.title,
                    author : newData.author,
                    category : newData.category,
                    stock : newData.stock
                }, (err, r) => {
                    if (err) {
                        reject(err)
                    }
    
                    resolve(r.ops)
                    client.close()
                })
            })
        })
    },

    findAll : () => {
        return new Promise( (resolve,reject) => {
            MongoClient.connect(url, (err,client) => {
                if (err) {
                    reject(err)
                }
    
                let db = client.db(dbName)
    
                db.collection('books').find().toArray((err,docs) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(docs)
                    client.close()
                })
            })
        })
    },

    findById : (id) => {
        return new Promise( (resolve,reject) => {
            MongoClient.connect(url, (err,client) => {
                if (err) {
                    reject(err)
                }
    
                let db      = client.db(dbName)
                let o_id    = new ObjectID(id)

                db.collection('books').find({_id : o_id}).toArray((err,docs) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(docs)
                    client.close()
                })
            })
        })
    },

    updateBooks : (id, updateData) => {
        return new Promise((resolve,reject) => {
            MongoClient.connect(url,(err,client) => {
                if (err) {
                    reject(err)
                }
    
                let db = client.db(dbName)
                let o_id = new ObjectID(id)
                 
                db.collection('books').findOneAndUpdate({_id : o_id},{
                    isbn : updateData.isbn,
                    title : updateData.title,
                    author : updateData.author,
                    category : updateData.category,
                    stock : updateData.stock
                }, {upsert: true, returnOriginal: false}, (err,r) => {
                    if (err) {
                        reject(err)
                    }

                    resolve(r)
                })

            })
        })
    },

    deleteBooks : (id) => {
        return new Promise((resolve,reject) => {
            MongoClient.connect(url,(err,client) => {
                if (err) {
                    reject(err)
                }
    
                let db = client.db(dbName)
                let o_id = new ObjectID(id)
                 
                db.collection('books').findOneAndDelete({_id : o_id}, 
                    (err,r) => {
                    if (err) {
                        reject(err)
                    }

                    resolve(r)
                })

            })
        })
    }
}