const express = require('express')

const collectionController = require('../controllers/feed')

const router = express.Router()

router.get('/all', collectionController.getCollections)

module.exports = router;