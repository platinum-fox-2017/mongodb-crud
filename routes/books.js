const express = require('express');
const BookController = require('../controllers/bookController.js').BookController
const router = express.Router();

/* GET users listing. */
router.post('/add', BookController.createBook);


router.get('/library', BookController.readBook);
router.get('/library/:_id', BookController.readOneBook);

router.put('/edit/:_id', BookController.updateBook);
router.delete('/delete/:_id', BookController.deleteBook);

module.exports = router;
