const express  = require('express');
const router = express.Router();
const {findAllBooks, addBook, deleteBook, findBookById, updateBook} = require('../controllers/books.controller');


router.get('/', findAllBooks);
router.post('/', addBook);

router.delete('/:id', deleteBook);
router.get('/:id', findBookById);
router.put('/:id', updateBook);


module.exports = router;
