const express = require('express');
const router = express.Router();
const { showData, insertData, updateData, deleteData } = require("../controllers/books.controller")

router.get('/', showData)
router.post('/insert', insertData)
router.put('/update', updateData)
router.delete('/delete', deleteData)


module.exports = router;
