const express = require('express');
const router = express.Router();
const usersController = require('../controllers/book.controller');

router.get('/', usersController.findBooks);
router.post('/', usersController.createBook);
router.get('/:id', usersController.findBooksById);
router.put('/:id', usersController.updateBook);
router.delete('/:id', usersController.deleteBook);

module.exports = router;
