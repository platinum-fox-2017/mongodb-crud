const express = require('express');
const router = express.Router();
const { showData, insertData, deleteData, updateData } = require('../controllers/api.controller')

router.get('/books', showData)
router.post('/books', insertData)
router.delete('/books', deleteData)
router.put('/books', updateData)

module.exports = router;