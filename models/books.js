const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'library';
let client;

module.exports = {
 const findAll =  () => {
  (async function() {
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const docs = await db.collection('books').find({}).toArray();
      return docs ;

    } catch (err) {
      console.log(err.stack);
      return err.stack;
    }
    if (client) {
      client.close();
    }
  })();
}
};
