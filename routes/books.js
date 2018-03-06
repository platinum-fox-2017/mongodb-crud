const router = require('express').Router();
const {index, create, destroy} = require('../controllers/BookController');

router.get('/', index);
router.post('/', create);
router.delete('/:id',destroy);

module.exports = router;
