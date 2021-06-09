const express = require('express')
const {logger} = require("./middlewares/mylogger_middleware");
const app = express()
const port = 3000


app.use(logger)


app.get('/', (req, res) => {
    console.log("> first get method")
    res.send('Hello World!')
})

app.post('/', (req, res) => {

    console.log("> first post method")
    res.json({code: 0, message: 'first post method'})
})

app.get('/about', function (req, res) {
    res.send('about')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})