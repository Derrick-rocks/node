const express = require('express')
const {mClient} = require("./lib/mysql_client");

const {createUser} = require("./controllers/users-controller");
const {getAbout} = require("./controllers/abouts-controller");
const {getUsers} = require("./controllers/users-controller");
const {logger} = require("./middlewares/mylogger_middleware");
const app = express()
const port = 3000

mClient()
app.use(express.json()) //Notice express.json middleware

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use(logger)
app.get('/users', getUsers)

app.post('/users', createUser)

app.get('/about',getAbout)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})