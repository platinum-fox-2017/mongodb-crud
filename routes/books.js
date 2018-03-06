const router = require('express').Router()
const {
    showAllBooks,
    insertBook,
    updateBook,
    deleteBook
} = require('../controllers/books.controllers')

router.get('/', showAllBooks)
router.post('/', insertBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)


module.exports = router