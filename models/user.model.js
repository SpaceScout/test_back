const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const user = sequelize.define("users", {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_surname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_patronymic: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = user