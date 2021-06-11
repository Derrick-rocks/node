const {User} = require("./User");
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('express_demo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


class Course extends Model {}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false
});


exports.Course = Course;
