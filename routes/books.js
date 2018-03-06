const express = require('express');
const router = express.Router();
const{show,add,update,deleted} = require('../controllers/books')

router.get('/',show)
router.post('/',add)
router.put('/',update)
router.delete('/',deleted)

module.exports = router

