const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Shoe = sequelize.define('Shoe', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Shoe;