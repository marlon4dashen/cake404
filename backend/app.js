const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const collectionRoutes = require('./routes/collection')
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose')

const app = express()


app.use(bodyParser.json())
app.use(cors());
app.use('/collection', collectionRoutes)
app.use('/auth', authRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({message: message, data: data})
})


mongoose.connect(uri="mongodb+srv://marlon4dashen:<password>@cake404.l8c8s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(result => {
    app.listen(8080)
}).catch(err => {
    console.log(err)
})