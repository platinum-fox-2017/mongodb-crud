const router = require('express').Router();
const {index,create} = require('../controllers/BookController');

router.get('/', index);
router.post('/', create);

module.exports = router;
