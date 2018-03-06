const express           = require('express');
const router            = express.Router();
const libraryController = require('../controller/LibraryController')

router.get('/', libraryController.findAll)
router.get('/:id', libraryController.findById)
router.get('/seed', libraryController.seedBooks)
router.post('/', libraryController.create)
router.put('/:id', libraryController.updateBooks)
router.delete('/:id',libraryController.deleteBooks)
module.exports = router;