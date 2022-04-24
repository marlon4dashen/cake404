const express = require('express')

const collectionRoutes = require('./routes/collection')

const app = express()

app.use('/collection', collectionRoutes)


app.listen(8080)