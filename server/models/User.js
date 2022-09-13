// MongoDB
const mongoose  = require('./db');

// Model - Users
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true // Mandatory
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

// To delete the document: db.users.deleteMany({})

// Collection
mongoose.model('users', UserSchema);

const user = mongoose.model('users');

user.dropDatabase();

module.exports = user;

/*
// MYSQL
const db  = require('./db');
// const db2 = require('./db_prod');

// Localhost
const User = db.sequelize.define('users', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING(100)
    },
    email: {
        type: db.Sequelize.STRING(100)
    },
    password: {
        type: db.Sequelize.STRING(100)
    }
});

// User.sync({force: true});
module.exports = User;
*/