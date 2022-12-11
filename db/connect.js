const Sequelize = require('sequelize')
require('dotenv').config()

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

// const sequelize = new Sequelize('mysql://ukihhc3aiannxdgy:vZnYWqjDylvTVDn0mYDE@bsfh0cq02jl3mqkau4kt-mysql.services.clever-cloud.com:3306/bsfh0cq02jl3mqkau4kt')
//pass the connection string from clever cloud or aws or google cloud


//USING AWS FOR POSTGRESQL
const sequelize = new Sequelize(
    process.env.POSTGRESQL_NAME, 
    process.env.POSTGRESQL_ADMIN,
    process.env.POSTGRESQL_PASSWORD, {
    host :  process.env.POSTGRESQL_DB_HOST,
    dialect : 'postgres'
})

//USING AWS FOR MYSQL
// const sequelize = new Sequelize(
//     process.env.MYSQL_DB_NAME,
//     process.env.MYSQL_DB_ADMIN,
//     process.env.MYSQL_DB_PASSWORD, {
//     host :  process.env.MYSQL_DB_HOST,
//     dialect : 'mysql'
// })

module.exports = sequelize