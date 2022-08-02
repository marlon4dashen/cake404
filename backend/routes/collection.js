const express = require('express')

const collectionController = require('../controllers/collection')

const router = express.Router()

router.get('/select/:select', collectionController.getCollections)
router.get('/id/:id', collectionController.getById)

module.exports = router;