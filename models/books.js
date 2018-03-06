const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'library';
let client;

module.exports = {
  findAll :  () => {
    return new Promise(function(resolve, reject) {
      (async function() {
        try {
          client = await MongoClient.connect(url);
          const db = client.db(dbName);
          const docs = await db.collection('books').find({}).toArray();
           resolve(docs) ;

        } catch (err) {
          console.log(err.stack);
          reject(err);
        }
        if (client) {
          client.close();
        }
      })();
    });
  },
  create: (input) => {
    return new Promise(function(resolve, reject) {
      (async function() {
        try {
          client = await MongoClient.connect(url);
          const db = client.db(dbName);
          const insert = await db.collection('books').insertOne(input);
          const docs = await db.collection('books').find(input).toArray();
          resolve(docs) ;

        } catch (err) {
          console.log(err.stack);
          reject(err);
        }
        if (client) {
          client.close();
        }
      })();
    });
  }
};
