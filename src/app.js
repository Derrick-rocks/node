const express = require('express')
const db = require("./models");
const {addCourseToUser} = require("./controllers/users-controller");
const {getCourse} = require("./controllers/courses-controller");
const {getCourses} = require("./controllers/courses-controller");
const {getUser} = require("./controllers/users-controller");
const {Sequelize} = require("sequelize");
const {mClient} = require("./lib/mysql_client");

const {createUser} = require("./controllers/users-controller");
const {getAbout} = require("./controllers/abouts-controller");
const {getUsers} = require("./controllers/users-controller");
const {logger} = require("./middlewares/mylogger_middleware");

// const {Course} = require("../deprecated/Course");
// const {User} = require("../deprecated/User");





(async function() {
    const app = express()
    const port = 3000

    // User.hasMany(Course,
    //     {
    //         foreignKey: 'user_id',
    //         as: 'courses'
    //
    //     })
    //
    // Course.belongsTo(User, {
    //     foreignKey: 'user_id',
    //     as: 'user'
    // })

    // console.log(db)

    // mClient()
    app.use(express.json()) //Notice express.json middleware

    app.set('views', 'src/views');
    app.set('view engine', 'ejs');

    app.use(logger)
    app.get('/users', getUsers)
    app.get('/courses', getCourses)
    app.get('/courses/:id', getCourse)
    app.post('/add_course', addCourseToUser)
    app.get('/users/:id', getUser)
    app.post('/users', createUser)
    app.get('/about',getAbout)
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })})();





