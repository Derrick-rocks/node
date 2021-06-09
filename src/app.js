const express = require('express')
const {createUser} = require("./controllers/users-controller");
const {getAbout} = require("./controllers/abouts-controller");
const {getUsers} = require("./controllers/users-controller");
const {logger} = require("./middlewares/mylogger_middleware");
const app = express()
const port = 3000

app.use(express.json()) //Notice express.json middleware

app.use(logger)
app.get('/users', getUsers)

app.post('/users', createUser)

app.get('/about',getAbout)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})