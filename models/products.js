const Sequelize = require('sequelize')
const connectDB = require('../db/connect')

const product = connectDB.define('Products', {
    product_name : {
        type : Sequelize.STRING,
        unique : {
            args : true,
            msg : 'This item already exists, please provide another name!'
        }
    },

    price : {
        type  : Sequelize.INTEGER
    }
})

module.exports = product