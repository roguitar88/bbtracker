const Sequelize = require('sequelize');
require('dotenv').config();
// console.log(process.env);
// global.appEnvironment = 'development'; // Enable this for localhost
// global.appEnvironment = process.env.NODE_ENV || 'development';
global.appEnvironment = process.env.NODE_ENV;

// DB connection (MySQL)
let pass = appEnvironment === 'production' ? 'gQB36gRAgVcY4aYw@' : '';

const sequelize = new Sequelize('bbtracker', 'root', pass, {
    host: 'localhost',
    dialect: 'mysql'
    // query: {raw: true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.localhost,
    user: process.env.root,
    password: process.env,
    database: process.env.roguitar_olimppius
});

module.exports = db;
*/
