// MongoDB
const mongoose = require('mongoose');

global.appEnvironment = process.env.NODE_ENV;

var connect_url = 'mongodb://localhost:27017/testingmongoose';

mongoose.connect(connect_url).then(() => {
    console.log('MongoDB connected successfully!');
}).catch((err) => {
    console.log('Erro: ' + err);
});

module.exports = mongoose;

/*
// MySQL
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
*/