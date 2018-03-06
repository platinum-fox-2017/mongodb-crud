const express = require('express')
const router = express.Router()
const {addBook, showBook, editBook, deleteBook} = require('../controllers/book.controller')

router.get('/',showBook)
router.post('/addbook',addBook)
router.put('/editbook/:titleBook',editBook)
router.delete('/deletebook/:titleBook',deleteBook)

module.exports= router