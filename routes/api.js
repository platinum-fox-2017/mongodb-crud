var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond from api');
});

router.use('/books', require('./book'));

module.exports = router;
