const express = require('express');
const router = express.Router();
const {insertBook, getBooks, deleteBook, updateBook} = require('../controllers/books')

router.post('/', insertBook)
router.get('/', getBooks)
router.delete('/', deleteBook)
router.put('/', updateBook)

module.exports = router;
