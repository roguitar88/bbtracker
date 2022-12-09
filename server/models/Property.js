// PostgreSQL
const db  = require('./db');
// const db2 = require('./db_prod');

// Localhost
const Property = db.sequelize.define('properties', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    property_code: {
        type: db.Sequelize.STRING(100)
    },
    property_name: {
        type: db.Sequelize.STRING(200)
    },
    property_domain: {
        type: db.Sequelize.STRING(100)
    },
    property_owner: {
        type: db.Sequelize.BIGINT
    },
    created_at: {
        type: db.Sequelize.DATE
    },
    updated_at: {
        type: db.Sequelize.DATE
    }
}, { timestamps: false });

// Property.sync({force: true});
module.exports = Property;