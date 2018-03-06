const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const {getBooks,insertBooks,editBooks,deleteBooks} = require('../controllers/books')


router.get('/',getBooks)
router.post('/',insertBooks)
router.put('/',editBooks)
router.delete('/',deleteBooks)

module.exports = router
