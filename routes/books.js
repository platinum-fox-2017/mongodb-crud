const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')

/* GET users listing. */
router.post('/books', bookController.create)
router.get('/books', bookController.findAll)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)

module.exports = router;
