const Sequelize = require('sequelize')
const sequelize = require('../db')

const Certificate = sequelize.define('certificate', {
    certificates: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
}, {
    // Other model options go here
});

module.exports = Certificate;
