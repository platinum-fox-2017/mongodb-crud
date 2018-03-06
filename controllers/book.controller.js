'use strict';

const Book = require('../models/book.model');

module.exports = {
    findBooks(req, res) {
        Book.findAll()
        .then(books => {
            if (books.length === 0) res.status(404).json({ message: "data not found" });
            else res.status(200).json({
                message: "data found",
                data: books
            });
        })
        .catch(err => res.status(500).json({ message: err }))
    },

    createBook(req, res) {
        Book.create({ ...req.body })
        .then(book => res.status(201).json({
            message: "create data success",
            data: book
        }))
        .catch(err => res.status(500).json({ message: err }))
    },

    findBooksById(req, res) {
        Book.findById(req.params.id)
        .then(book => {
            if (book.length === 0) res.status(404).json({ message: "data not found" });
            else res.status(200).json({
                message: "data found",
                data: book
            });
        })
        .catch(err => res.status(500).json({ message: err }))
    },

    updateBook(req, res) {
        Book.update(req.params.id, { ...req.body })
        .then(book => res.status(201).json({
            message: "update data success",
            data: book
        }))
        .catch(err => res.status(500).json({ message: err }))
    },

    deleteBook(req, res) {
        Book.delete(req.params.id)
        .then(() => res.status(201).json({ message: "delete data success" }))
        .catch(err => res.status(500).json({ message: err }))
    },
};