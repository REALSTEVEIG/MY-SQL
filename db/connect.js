const Sequelize = require('sequelize')

// const sequelize = new Sequelize('Rest_API', 'postgres', '1738', {
//     host :  'localhost',
//     dialect : 'postgres',
//     // logging: (...msg) => console.log(msg),
// })
// npm install --save pg pg-hstore

const sequelize = new Sequelize('sequelize', 'root', 'password', {
    host :  'localhost',
    dialect : 'mysql',
    // logging: (...msg) => console.log(msg),
})
//npm install --save mysql2

module.exports = sequelize