var express = require('express');
var router = express.Router();
const library = require('./library')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/library', library)

module.exports = router;