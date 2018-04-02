const express = require('express');
const router = express.Router();
const routerBooks = require('./books');
const routerHome = require('./home');


router.use('/', routerHome);
router.use('/books', routerBooks);


module.exports = router;
