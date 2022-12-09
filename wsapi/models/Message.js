// PostgreSQL
const db  = require('./db');
// const db2 = require('./db_prod');

// Localhost
/*
const Message = db.sequelize.define('messages', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    property_id: {
        type: db.Sequelize.JSON
    },
    room_id: {
        type: db.Sequelize.JSON
    },
    name: {
        type: db.Sequelize.JSON
    },
    message: {
        type: db.Sequelize.JSON
    },
    msg_time: {
        type: db.Sequelize.JSON
    },
    sender_id: {
        type: db.Sequelize.JSON
    }
}, { timestamps: false });
*/

const Message = db.sequelize.define('messages', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    info: {
        type: db.Sequelize.JSONB
    }
}, { timestamps: false });

// Message.sync({force: true});
module.exports = Message;