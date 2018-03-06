'use strict'

const router = require('express').Router();
const {create, readAll, updateOne, deleteOne, getOne} = require('../controllers/books.controller')

router.post('/create', create);
router.get('/', readAll);
router.put('/:isbn', updateOne);
router.delete('/:isbn', deleteOne);

router.get('/:isbn', getOne);

module.exports = router;