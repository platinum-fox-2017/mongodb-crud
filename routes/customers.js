var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const Customers = require('../controllers/customers')

/* GET users listing. */
router.get('/',Customers.viewCustomers)
router.post('/',Customers.addCustomers)
router.put('/',Customers.updateCustomers)
router.delete('/',Customers.deleteCustomers)





module.exports = router;
