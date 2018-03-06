const books = require('../models/books');

module.exports = {
  index : (req,res) => {
    books.findAll().then((books) => {
      res.status(200).json({
        message: 'Read All Books',
        data: books
      });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Something Went Wrong'
      });
    });
  },
  create: (req,res) => {
    books.create(req.body).then((book) => {
      res.status(200).json({
        message: 'Success Create New Book',
        data: book
      });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Something Went Wrong'
      });
    });
  },
  destroy: (req,res) => {
    const id = req.params.id;
    books.destroy(id).then((book) => {
      res.status(200).json({
        message: 'Success Delete a Book',
        data: book
      });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Something Went Wrong'
      });
    });
  },
  update: (req,res) => {
    const id = req.params.id;
    books.update(id,req.body).then((book) => {
      res.status(200).json({
        message: 'Success Update a Book',
        data: book
      });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Something Went Wrong'
      });
    });
  }
};
