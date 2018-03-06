const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'library';
let client;

const runSeeder =  () => {
  (async function() {
    try {
      // Use connect method to connect to the Server
      client = await MongoClient.connect(url);
      const db = client.db(dbName);

      //remove all data
      await db.collection('books').remove({},(err,removed) => {
        console.log(`${removed} Books Data Removed`);
      });

      // Insert two book
      let r = await db.collection('books').insertMany([{
        isbn: '978-1-60309-057-5',
        title: 'Dragon Puncher',
        author: 'James Kochalka',
        category: 'All Ages',
        stock: 3
      },
      {
        isbn: '978-1-891830-77-8',
        title: 'Every Girl is the end of the world for me',
        author: 'Jeffrey Brown',
        category: 'Mature (16+)',
        stock: 5
      }]);
      const docs = await db.collection('books').find({}).toArray();
      console.log(docs);

    } catch (err) {
      console.log(err.stack);
    }

    if (client) {
      client.close();
    }
  })();
}

runSeeder();
