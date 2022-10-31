const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const user = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
        
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = user;