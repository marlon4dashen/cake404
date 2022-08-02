const Product = require('../models/product')

exports.getCollections = (req, res, next) => {
    let collection = req.params.select
    if (collection === "all"){
        Product.find()
            .then(products => {
                if(!products){
                    const error = new Error("No product found.")
                    error.statusCode = 401
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
                    error.statusCode = 401
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

exports.getById = (req, res, next) => {
    let product_id = req.params.id
    Product.find( { _id: product_id })
        .then(product => {
            if (!product){
                const error = new Error("No product found with this ID.")
                error.statusCode = 401
                throw error
            }
            res.status(200).json(product)
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}