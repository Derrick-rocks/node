'use strict';
const Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  };
  Course.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  }, {

    scopes: {
        available: {
          where: {
            deletedAt: null
          }
        }
    },

    hooks: {
      afterCreate: (user, options) => {
        // nofify all user
        console.log("> notify users after create a new course")
      }
    },
    sequelize,
    modelName: 'Course',
      tableName: 'Courses'
  });
  return Course;
};

