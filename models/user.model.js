const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const user = sequelize.define("users", {
    // // user_id: {
    // //     type: DataTypes.STRING,
    // //     primaryKey: true,
    // //     allowNull: false
        
    // },
    user_name: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = user