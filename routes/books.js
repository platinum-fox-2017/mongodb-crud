var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const Books = require('../controllers/books')

/* GET users listing. */
router.get('/',Books.viewBooks)
router.post('/',Books.addBooks)
router.put('/',Books.updateBooks)
router.delete('/',Books.deleteBooks)





module.exports = router;
