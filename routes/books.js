var express = require('express');
var router = express.Router();
const { create,showData,editData,deleteData } = require('../controllers/booksController.js')



router.get('/', showData)
router.post('/create', create)
router.put('/update', editData)
router.delete('/delete', deleteData)


module.exports = router
