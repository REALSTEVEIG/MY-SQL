const Sequelize = require('sequelize');
const connectDB = require('../db/connect')

const User = connectDB.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true, //checks for email format
        allowNull: false,
        unique: {
            args:true,
            msg: 'Email address already in use!'
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = User