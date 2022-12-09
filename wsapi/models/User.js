/*
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

const User = mongoose.model('users');
*/

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
*/

// PostgreSQL
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
    full_name: {
        type: db.Sequelize.STRING(100)
    },
    birthdate: {
        type: db.Sequelize.DATE
    },
    cpf: {
        type: db.Sequelize.STRING(14)
    },
    email: {
        type: db.Sequelize.STRING(100)
    },
    password: {
        type: db.Sequelize.STRING(100)
    },
    phone: {
        type: db.Sequelize.STRING(20)
    },
    profile_img: {
        type: db.Sequelize.STRING(100)
    },
    status: {
        type: db.Sequelize.INTEGER
    },
    ip: {
        type: db.Sequelize.STRING(50)
    },
    created_at: {
        type: db.Sequelize.DATE
    },
    updated_at: {
        type: db.Sequelize.DATE
    }
}, { timestamps: false });

// User.sync({force: true});
module.exports = User;