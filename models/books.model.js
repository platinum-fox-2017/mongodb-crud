const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'library';
const colName = 'books';

module.exports = {
    findAll : () => {
        return new Promise ((resolve, reject) => {
            (async function() {
                let client;

                try {
                    client = await MongoClient.connect(url);
                    let collection = client.db(dbName).collection(colName);
                    collection
                        .find({})
                        .toArray()
                        .then((result) => {
                            resolve(result);
                        })
                } catch(err) {
                    reject(err);
                }
                client.close();
            }) ();
        })
    },

    create : (obj) => {
        return new Promise ((resolve, reject) => {
            (async function() {
                let client;

                try {
                    client = await MongoClient.connect(url);
                    let collection = client.db(dbName).collection(colName);
                    collection
                        .insertOne(obj)
                        .then((result) => {
                            resolve(obj);
                        })
                } catch(err) {
                    reject(err);
                }
                client.close();
            }) ();
        })
    },

    destroy : (id) => {
        return new Promise ((resolve, reject) => {
            (async function() {
                let client;

                try {
                    client = await MongoClient.connect(url);
                    let collection = client.db(dbName).collection(colName);
                    collection
                        .deleteOne({
                            "_id" : ObjectId(id)
                        }).then(() =>{
                            resolve();
                        })
                } catch(err) {
                    reject(err);
                }
                client.close();
            }) ();
        });
    },

    findById : (id) => {
        return new Promise ((resolve, reject) => {
            (async function() {
                let client;

                try {
                    client = await MongoClient.connect(url);
                    let collection = client.db(dbName).collection(colName);
                    collection
                        .findOne({
                            "_id" : ObjectId(id)
                        }).then((result) => {
                            resolve(result);
                        })
                } catch(err) {
                    reject(err);
                }
                client.close();
            }) ();
        })
    },

    update : (id, obj) => {
        console.log(obj);
        return new Promise ((resolve, reject) => {
            (async function() {
                let client;

                try {
                    client = await MongoClient.connect(url);
                    let collection = client.db(dbName).collection(colName);
                    collection
                        .findOneAndUpdate({
                            _id : ObjectId(id)
                        }, {
                            $set: obj
                        }, {
                            returnOriginal: false
                        })
                        .then((result) => {
                            resolve(result.value);
                        })
                } catch(err) {
                    reject(err);
                }
                client.close();
            }) ();
        });
    },
}
