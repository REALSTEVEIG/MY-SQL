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

const sequelize = new Sequelize('mysql://ukihhc3aiannxdgy:vZnYWqjDylvTVDn0mYDE@bsfh0cq02jl3mqkau4kt-mysql.services.clever-cloud.com:3306/bsfh0cq02jl3mqkau4kt')

module.exports = sequelize