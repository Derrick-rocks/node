const {Course} = require("../models/Course");

const getCourses = async function (req, res, next) {

    const courses = await Course.findAll({include: 'user'})
        .then(cs => cs.map(c => c.toJSON()) )
    res.json({courses: courses});

}


const getCourse = async function (req, res, next) {

    const {id} = req.params;
    const course = await Course.findByPk(id)
    const user = await course.getUser();
    res.json({course: course.toJSON(), user: user.toJSON()});

}



module.exports = {
    getCourses: getCourses,
    getCourse: getCourse

};

