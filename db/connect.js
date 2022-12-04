const Sequelize = require('sequelize')

// const sequelize = new Sequelize('Rest_API', 'postgres', '1738', {
//     host :  'localhost',
//     dialect : 'postgres',
//     // logging: (...msg) => console.log(msg),
// })
// npm install --save pg pg-hstore

// const sequelize = new Sequelize('sequelize', 'root', 'password', {
//     host :  'localhost',
//     dialect : 'mysql',
//     // logging: (...msg) => console.log(msg),
// })
//npm install --save mysql2

const sequelize = new Sequelize('mysql://ue8yqsvijquk6kvp:fMn7xZKeGuUiktI5O31M@bwbk0ztg3kwrg9xasy62-mysql.services.clever-cloud.com:3306/bwbk0ztg3kwrg9xasy62')

module.exports = sequelize