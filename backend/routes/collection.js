const express = require('express')

const collectionController = require('../controllers/collection')

const router = express.Router()

router.get('/:select', collectionController.getCollections)


module.exports = router;