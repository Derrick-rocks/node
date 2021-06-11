// const {User} = require("../../deprecated/User");
const {mClient} = require("../lib/mysql_client");
var _ = require('lodash')

const {Course} = require("../../deprecated/Course");

const db = require("../models")





const getUser = async function (req, res, next) {
    const {id} = req.params;
    console.log("> getUser id: %s", id)
    const user = await db.User.findByPk(id)
        // .then(u => _.pick(u, ['id', 'firstName']))
        // .catch(err => console.log(err))
    // const user =  await User.findOne({where: {id: id}})
    // // transform
    // const us = _.pick(user, ['id', 'firstName'])

    const courses = await user.getCourses();
    res.json({user: user.toJSON(), courses: courses.map(c =>c.toJSON())})
}



const getUsers = async function (req, res, next) {
    const users = await db.User.findAll({order: [['createdAt', 'DESC']], include: 'courses'})
        .then(users => users.map( u => ({...u.toJSON(),  courses: u.courses}))) ;
    res.json({users: users});
}

const createUser = async function (req, res, next) {
    const {firstName, lastName, password, email} = req.body;
    const user =  db.User.build({firstName: firstName,
        lastName: lastName,
        email: email,
        password: password})
    await user.save();
    return (res.json({code: 0, user: user.toJSON()}))
}

const addCourseToUser = async function(req, res, next) {
    const {title, email} = req.body
    const user = await db.User.findOne({where: {email: email}})
    const course = await user.createCourse({title: title})
    res.json({course: course, created: true})
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUser: getUser,
    addCourseToUser: addCourseToUser
};

