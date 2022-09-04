const db  = require('./db');

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