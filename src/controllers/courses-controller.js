
const db = require("../models")

const getCourses = async function (req, res, next) {

    const courses = await db.Course.scope('available').findAll({include: 'user'})
        .then(cs => cs.map(c => c.toJSON()) )
    res.json({courses: courses});

}

const getCourse = async function (req, res, next) {
    const {id} = req.params;
    const course = await db.Course.findByPk(id)
    const user = await course.getUser();
    res.json({course: course.toJSON(), user: user.toJSON()});

}

const deleteCourse = async function (req, res, next) {
    const {id} = req.params;
    const course = await db.Course.findByPk(id)

    await course.update({deletedAt: new Date()})
    res.json({code: 0, message: 'deleted'});

}

module.exports = {
    getCourses,
    getCourse,
    deleteCourse
};

