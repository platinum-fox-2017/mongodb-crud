const LibraryModels = require('../models/LibraryModels')

const dbName      = 'library';

module.exports    = {
    seedBooks : (req,res) => {
        LibraryModels.seed()
        .then((insertedDatas) => {
            res.status(200).json({
                message : 'Seed data success !',
                data : insertedDatas
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'seed data failed ! err : ' + err
            })
        })
    },

    create : (req,res) => {
        LibraryModels.createBooks(req.body)
        .then((insertedData) => {
            res.status(200).json({
                message : 'insert data success !',
                data    : insertedData
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'insert data failed ! + err : ' + err
            })
        })
    },

    findAll : (req,res) => {
        LibraryModels.findAll()
        .then((docs) => {
            res.status(200).json({
                message : 'get all data success !',
                data    : docs
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'get all data failed ! err : ' + err
            })
        })
    },

    findById : (req,res) => {
        LibraryModels.findById(req.params.id)
        .then((docs) => {
            res.status(200).json({
                message : 'get data success !',
                data    : docs
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'get data failed ! err : ' + err
            })
        })
    },

    updateBooks : (req,res) => {
        LibraryModels.updateBooks(req.params.id, req.body)
        .then((updatedData) => {
            res.status(200).json({
                message : 'Update data success !',
                updatedData
            })
        })
        .catch(err => {
            res.status(401).json({
                message : 'Update data failed ! err : ' + err
            })
        })
    },

    deleteBooks : (req,res) => {
        LibraryModels.deleteBooks(req.params.id)
        .then((deletedData) => {
            res.status(200).json({
                message : 'Delete data success !',
                deletedData
            })            
        })
        .catch(err => {
            res.status(401).json({
                message : 'Delete data failed ! err : ' + err
            })
        })
    }
}