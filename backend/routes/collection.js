const express = require('express')

const collectionController = require('../controllers/collection')

const router = express.Router()

router.get('/all', collectionController.getCollections)

module.exports = router;