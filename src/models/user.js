'use strict';
const CryptoJS = require("crypto-js");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Course,
          {
              foreignKey: 'user_id',
              as: 'courses'

          })
    }
  };
  User.init({

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
    modelName: 'User',
  });
  return User;
};