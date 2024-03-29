const mongoose = require('mongoose')
const { modelName } = require('./product')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    cart: {
        items:[
            {
                productId: {type:Schema.Types.ObjectId, ref: "Product", required: true},
                quantity: {type:Number, required:true}
            }
        ]
    }
})

module.exports = mongoose.model('User', userSchema)