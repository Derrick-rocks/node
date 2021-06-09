


const getUsers = function (req, res, next) {
    const list = [
        {id: 1, name: 'jacky', age: 22},
        {id: 2, name: 'nancy', age: 22},
        {id: 3, name: 'test', age: 22},
    ]
    // return(res.json({users: list}))
    res.render('list', {
        list: list
    });

}

const createUser = function (req, res, next) {

    console.dir(req.body);

    return(res.json({code: 0, message: 'user was created'}))

}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
};

