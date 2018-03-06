const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'library';


module.exports = {
    getAllBooks : (req, res) => {
        MongoClient.connect(url, (err, client) => {
            if(err)
                return res.status(500).json({
                    message: "Not connected to database"
                });
            let collection = client.db(dbName).collection('books');
            collection.find({}).toArray((err, result) => {
                if(err)
                    return res.status(500).json({
                        message: "Collection not found"
                    });
                res.status(200).json({
                    message:'Read all books data',
                    data: result
                });
            });
        });
    },


}
