var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    
    // connect to db
    var dbo = db.db("library");

    // create collection books
    dbo.createCollection("books", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});