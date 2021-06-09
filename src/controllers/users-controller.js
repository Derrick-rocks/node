const {mClient} = require("../lib/mysql_client");


const getUsers = function (req, res, next) {
    const list = [
        {id: 1, name: 'jacky', age: 22},
        {id: 2, name: 'nancy', age: 22},
        {id: 3, name: 'test', age: 22},
    ]
    res.render('list', {
        list: list
    });
}

const createUser = function (req, res, next) {
    const {name, age, gender} = req.body;
    mClient().query('INSERT INTO users SET ?', {name: name, age: age}, function (error, results, fields) {
        if (error) throw error;
        console.log(results.insertId);
    });


    return(res.json({code: 0, message: 'user was created'}))

}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
};

