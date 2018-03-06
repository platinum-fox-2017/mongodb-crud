const express = require('express');
const router = express.Router();
const Books_Controller = require('../controllers/books.controllers');

router.post('/', Books_Controller.add_new_book);
router.get('/', Books_Controller.get_all_books);
router.put('/:id',Books_Controller.update_a_book);
router.delete('/:id',Books_Controller.delete_a_book);

module.exports = router;
