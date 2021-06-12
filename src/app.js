const express = require('express')
const db = require("./models");
const {deleteCourse} = require("./controllers/courses-controller");
const {addCourseToUser} = require("./controllers/users-controller");
const {getCourse} = require("./controllers/courses-controller");
const {getCourses} = require("./controllers/courses-controller");
const {getUser} = require("./controllers/users-controller");

const {createUser} = require("./controllers/users-controller");
const {getAbout} = require("./controllers/abouts-controller");
const {getUsers} = require("./controllers/users-controller");
const {logger} = require("./middlewares/mylogger_middleware");
const {handleErrors} = require("./middlewares/handle_errors");
const cors = require('cors')


const catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};


(async function() {
    const app = express()
    const port = 3000
    app.use(express.json()) //Notice express.json middleware

    app.set('views', 'src/views');
    app.set('view engine', 'ejs');

    app.use(logger)
    app.use(cors())


    app.get('/users', catchAsync(getUsers))
    app.get('/courses', getCourses)
    app.get('/courses/:id', getCourse)
    app.post('/courses/:id/delete', deleteCourse)
    app.post('/add_course', addCourseToUser)
    app.get('/users/:id', catchAsync(getUser))
    app.post('/users', createUser)
    app.get('/about',getAbout)

    app.use(handleErrors);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })})();





