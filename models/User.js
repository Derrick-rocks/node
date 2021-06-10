const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('express_demo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

exports.User = User;
