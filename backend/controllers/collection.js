const Product = require('../models/product')

exports.getCollections = (req, res, next) => {
    let collection = req.params.select
    if (collection === "all"){
        Product.find()
            .then(products => {
                if(!products){
                    const error = new Error("No product found.")
                    err.statusCode = 401
                    throw error
                }
                res.status(200).json(products)
            })
            .catch(err => {
                if (!err.statusCode){
                    err.statusCode = 500
                }
                next(err)
            })
    } else {
        Product.find( { label: collection.toLowerCase() } )
            .then(products => {
                if(!products){
                    const error = new Error("No product found with this label.")
                    err.statusCode = 401
                    throw error
                }
                res.status(200).json(products)
            })
            .catch(err => {
                if (!err.statusCode){
                    err.statusCode = 500
                }
                next(err)
            })
    }
}