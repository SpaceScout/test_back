const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    'KvantStats',
    'postgres',
    'root',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: '5432'
    });