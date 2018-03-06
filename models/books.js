const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
// const assert = require('assert')

const url = 'mongodb://localhost:27017'

const dbName = 'library'

module.exports = {
  read: () => {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url).then(client => {
        console.log('Connected correctly to server')
        const db = client.db(dbName)
        const col = db.collection('books')
        const docs = col.find({}).toArray()
        client.close()
        resolve(docs)
      }).catch(err => reject(err))
    })
  },

  insertOne: (data) => {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url).then(client => {
        console.log('Connected correctly to server')
        const db = client.db(dbName)
        const col = db.collection('books')
        const insert = col.insertOne(data)
        const docs = col.find(data).toArray()
        client.close()
        resolve(docs)
      }).catch(err => reject(err))
    })
  },

  update: (id, input) => {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url).then(client => {
        console.log('Connected correctly to server')
        const db = client.db(dbName)
        const col = db.collection('books')
        const update = col.findOneAndUpdate({
          _id: ObjectId(id)
        },
        { $set: input }, {
          returnOriginal: false,
          sort: [['_id', 1]],
          upsert: true,
          returnNewDocument: true
        }
      )
      // console.log(update)
      resolve(update)
      }).catch(err => reject(err))
    })
  },

  deleteOne: (id) => {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url).then(client => {
        console.log('Connected correctly to server')
        const db = client.db(dbName)
        const col = db.collection('books')
        const docs = col.find({ _id: ObjectId(id) }).toArray()
        const remove = col.deleteOne({ _id: ObjectId(id) })
        resolve(docs)
      }).catch(err => reject(err))
    })
  }
}