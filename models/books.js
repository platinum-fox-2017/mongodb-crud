const MongoClient = require('mongodb').MongoClient
const uri         = "mongodb://localhost";
const dbName      = 'platinum'
const collName    = 'library'
const ObjectId    = require('mongodb').ObjectID

module.exports.findAll = function(callback) {
  MongoClient.connect(uri, function(err, client) {
    if (err) { return console.log(err.message); }
    const collection = client.db(dbName).collection(collName)

    collection.find({}).toArray(function(err, data) {
      callback(data)
    })

    client.close();
  })
}

module.exports.findById = function(id, callback) {
  MongoClient.connect(uri, function(err, client) {
    if (err) { return console.log(err.message); }
    const collection = client.db(dbName).collection(collName)

    collection.find({'_id': ObjectId(id)}).toArray(function(err, data) {
      callback(err, data)
    })

    client.close();
  })
}

module.exports.create = function(objData, callback) {
  MongoClient.connect(uri, function(err, client) {
    if (err) { return console.log(err.message); }
    const collection = client.db(dbName).collection(collName)

    collection.insertOne(objData, function(err, result) {
      callback(err, result)
    })

    client.close();
  })
}

module.exports.update = function(id, objData, callback) {
  MongoClient.connect(uri, function(err, client) {
    if (err) { return console.log(err.message); }
    const collection = client.db(dbName).collection(collName)
    console.log(ObjectId(id), objData);

    collection.updateOne({'_id' : ObjectId(id)}, {$set: objData}, function(err, result) {
      console.log(result);
      callback(err, result)
    })

    client.close();
  })
}

module.exports.delete = function(id, callback) {
  MongoClient.connect(uri, function(err, client) {
    if (err) { return console.log(err.message); }
    const collection = client.db(dbName).collection(collName)

    collection.deleteOne({'_id' : ObjectId(id)}, function(err, result) {
      callback(err, result)
    })

    client.close();
  })
}
