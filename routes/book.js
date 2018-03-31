const express = require('express')
const router = express.Router()
const {addBook, showBook, showBookById, editBook, deleteBook} = require('../controllers/book.controller')

router.get('/',showBook)
router.get('/:titleBook',showBookById)
router.post('/',addBook)
router.put('/:titleBook',editBook)
router.delete('/:titleBook',deleteBook)

module.exports= router