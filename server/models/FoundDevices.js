/*
// MongoDB
const mongoose  = require('./db');

// Model - FoundDevices
const DeviceSchema = mongoose.Schema({
    device_name: {
        type: String,
        require: true // Mandatory
    },
    device_xml: {
        type: String,
        require: true
    },
    token: {
        type: String,
        require: true
    }
});

// To delete the document: db.found_devices.deleteMany({})

// Collection
mongoose.model('found_devices', DeviceSchema);

const FoundDevices = mongoose.model('found_devices');

module.exports = FoundDevices;
*/

// MYSQL
const db  = require('./db');
// const db2 = require('./db_prod');

// Localhost
const FoundDevices = db.sequelize.define('found_devices', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    device_name: {
        type: db.Sequelize.STRING(500)
    },
    device_xml: {
        type: db.Sequelize.STRING(500)
    },
    browse_token: {
        type: db.Sequelize.STRING(500)
    }
    // freezeTableName: true,
    // tableName: 'devices_found',
    // timestamps: false
});

// FoundDevices.sync({force: true});
module.exports = FoundDevices;