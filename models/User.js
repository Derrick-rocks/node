const { Sequelize, DataTypes, Model } = require('sequelize');
var CryptoJS = require("crypto-js");

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
        allowNull: false,
        get() {
            const raw = this.getDataValue('firstName')
            return raw ? raw.toUpperCase() : null;
        }
    },
    lastName: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        set(value) {

            const enPassword = CryptoJS.HmacSHA1("Message", "Key").toString()
            this.setDataValue('password', enPassword)
        },

    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} - ${this.lastName}`
        }
    }
}, {
    sequelize,
    modelName: 'User'
});

exports.User = User;
