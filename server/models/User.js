const db  = require('./db_test');
const db2 = require('./db_prod');

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

// Production
const User2 = db2.sequelize.define('users', {
    id: {
        type: db2.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db2.Sequelize.STRING(100)
    },
    email: {
        type: db2.Sequelize.STRING(100)
    },
    password: {
        type: db2.Sequelize.STRING(100)
    }
});

// User.sync({force: true});
module.exports = {
    User: User,
    User2: User2
};