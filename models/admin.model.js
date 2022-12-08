const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const admin = sequelize.define("admins", {
    login: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,

    createdAt: false,

    updatedAt: false,
});

module.exports = admin