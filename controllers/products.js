const Product = require('../models/products')

exports.createProduct = async (req, res) => {
   try {
        const {product_name, price} = req.body

        if (!product_name, !price) {
            return res.status(400).json({msg : `Please provide all the required parameters`})
        }

        const newBudget = await Product.create({...req.body})
        
        return res.status(201).json({newBudget})
        
   } catch (error) {
        console.log(error)
        return res.status(500).json({error : error.message})
   }
}

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll({})
        if (!allProducts) {
            return res
                .status(404)
                .json({msg : 'No products in our database at the moment'})
        }

        return res
        .status(200)
        .json({total : allProducts.length, allProducts})
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({error : error.message})
    }
}

exports.getSigleProduct = async (req, res) => {
    try {
        const {id : productId} = req.params

        const product = await Product.findOne({where : {id : productId}})

        if (!product) {
            return res.status(404).json({msg : `Product with id ${productId} not found`})
        }

        return res.status(200).json({product})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error : error.message})
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const {params : {id : productId}, body : {product_name, price}} = req
        const product = await Product.update(
            {product_name, price}, 
            {where : {id : productId}, 
            returning : true, plain : true})

        res.status(200).json({product})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const {id : productId} = req.params
        const deleteProduct = await Product
                .destroy({where : {id : productId}})
        if (!deleteProduct) {
            return res
                .status(404)
                .json({msg : `No product with id ${productId} was found in the database`})
        }

        return res
            .status(200)
            .json({msg : `Product deleted successfully!`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error : error.message})
    }
}