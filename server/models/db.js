const Sequelize = require('sequelize');

// DB connection (MySQL)
const sequelize = new Sequelize('bbtracker', 'root', '', {
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
