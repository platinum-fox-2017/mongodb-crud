const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const dbName = "library"

module.exports = {
	findAll: (req, res) => {
		MongoClient.connect(url, function(err, db) {
			console.log("Connected correctly to server");
			const dbo = db.db(dbName)

			dbo.collection("book")
			   .find({})
				 .toArray()
				 .then( response => res.status(200).send(response) )
		})
	},
	create: (req, res) => {
		MongoClient.connect(url, function(err, db) {
			if (err) throw err
			console.log("Connected correctly to server");
			const dbo = db.db(dbName)

			let newBook = {
				isbn: req.body.isbn,
				title: req.body.title,
				author: req.body.author,
				category: req.body.category,
				stock: req.body.stock
			}

			console.log(newBook);

			dbo.collection("book")
  			 .insertOne(newBook, function(err, result) {
						if (err) {
							res.status(400).json({
								message: 'error when create book'
							})	
						}	else {
							res.status(201).json({
								message: "1 document inserted",
								data: result
							})
							db.close();
						}
					})
		});
	},
	update: (req, res) => {
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			const dbo = db.db(dbName);
			let myQuery = { id: req.params.id };
			let newValues = { $set: {
				isbn: req.body.isbn, 
				title: req.body.title,
				author: req.body.author,
				category: req.body.category,
				stock: req.body.stock
			}};

			dbo.collection("book").updateOne(myQuery, newValues, function(err, res) {
				if (err) throw err;
				console.log("1 document updated");
				db.close();
			});
		}); 
	},
	delete: (req, res) => {
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			var dbo = db.db(dbName);
			var myquery = { id: req.params.id };

			dbo.collection("book").deleteOne(myquery, function(err, obj) {
				if (err) throw err;
				console.log("1 document deleted");
				db.close();
			});
		}); 
	}
}