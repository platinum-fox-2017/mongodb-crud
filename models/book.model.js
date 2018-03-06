'use strict';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'library';

const safeObjectId = s => ObjectId.isValid(s) ? new ObjectId(s) : null;

module.exports = {
    findAll(){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (err) reject(err);
    
                const db = client.db(dbName);

                db.collection('books')
                  .find({})
                  .toArray((err, docs) => {
                      if (err) reject(err);
                      resolve(docs);
                  });
               
                client.close();
            });
        });
    },

    findById(id){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (err) reject(err);
    
                const db = client.db(dbName);

                db.collection('books')
                  .find({
                      _id: safeObjectId(id)
                  })
                  .toArray((err, docs) => {
                      if (err) reject(err);
                      else resolve(docs);
                  });
               
                client.close();
            });
        });
    },

    create(data){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (err) reject(err);

                const db = client.db(dbName);

                try {
                    db.collection('books')
                      .insert(data);
                    
                    Book.findAll()
                        .then(books => resolve(books[books.length - 1]))
                        .catch(err => reject(err))
                } catch (err) {
                    reject(err);
                }

                client.close();
            });
        })
    },

    update(id, data){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (err) reject(err);

                const db = client.db(dbName);

                try {
                    db.collection('books').updateOne(
                        { _id: safeObjectId(id) },
                        { $set: data }
                    );
                    
                    Book.findById(id)
                        .then(book => resolve(book))
                        .catch(err => reject(err))
                } catch (err) {
                    reject(err);
                }

                client.close();
            });
        })
    },

    delete(id){
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, client) => {
                if (err) reject(err);

                const db = client.db(dbName);

                try {
                    db.collection('books').deleteOne({ _id: safeObjectId(id) });
                    resolve();
                } catch (err) {
                    reject(err);
                }

                client.close();
            });
        })
    },
};
