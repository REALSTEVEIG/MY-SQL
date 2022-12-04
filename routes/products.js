const express = require('express')
const router = express.Router()
const {createProduct, getSigleProduct, getAllProducts,
     updateProduct, deleteProduct} = require('../controllers/products')

const productValidation = require('../middleware/productValidation')

router.route('/product')
    .post(productValidation, createProduct)
    .get(getAllProducts)
router.route('/product/:id')
    .get(getSigleProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = router