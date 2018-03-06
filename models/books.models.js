const express = require('express')
const book = express.Router()
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'library'
const ObjectId = require('mongodb').ObjectID
const bodyParser = require('body-parser');

book.use(bodyParser.json());
book.use(bodyParser.urlencoded({ extended: false }));

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            (async function(){
                let client
                try {
                    client = await MongoClient.connect(url)
                    console.log('Connected correctly to server')
                    const db = client.db(dbName)
                    let r = 
                    await db.collection('books')
                        .find({})
                        .toArray()
                        .then(res => {
                            console.log('res')
                            resolve(res)
                        })
                } catch (err) {
                    reject(err)
                }
                client.close()
            })()
        })
    },
    create: (body) => {
        return new Promise((resolve, reject) => {
            (async function(){
                let client
                try {
                    client = await MongoClient.connect(url)
                    console.log('Connected correctly to server')
        
                    const db = client.db(dbName)
                    // insert a single document
                    let r = 
                    await db.collection('books')
                        .insertOne({
                            isbn: body.isbn,
                            title: body.title,
                            author: body.author,
                            category: body.category,
                            stock: body.stock
                        })
                        .then(res => {
                            console.log(res)
                            resolve(body)
                        })
                } catch (err) {
                    reject(err)
                }
                client.close()
            })()
        })
    },
    update: (bookId, data) => {
        return new Promise ((resolve, reject) => {
            (async function (){
                let client
                try {
                    client = await MongoClient.connect(url)
                    console.log("Connected correctly to server")

                    const db = client.db(dbName)
                    const col = db.collection('books')
                    let r

                    r = await col.updateOne({_id: ObjectId(bookId)}, {$set: data})
                    .then((res)=> {
                        console.log(res)
                        resolve(data)
                    })
                } catch (err) {
                    reject(err)
                }
                client.close()
            })()
        })
    },
    delete: (bookId) => {
        return new Promise ((resolve, reject) => {
            (async function (){
                let client
                try {
                    client = await MongoClient.connect(url)
                    console.log("Connected correctly to server")

                    const db = client.db(dbName)
                    const col = db.collection('books')
                    let r

                    r = await col.deleteOne({_id: ObjectId(bookId)})
                        .then((res)=> {
                            resolve(res)
                        })

                } catch (err) {
                    reject(err)
                }
                client.close()
            })()
        })
    }   
}