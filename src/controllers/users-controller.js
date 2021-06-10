const {User} = require("../../models/User");
const {mClient} = require("../lib/mysql_client");
var _ = require('lodash')

const getUser = async function (req, res, next) {
    const {id} = req.params;
    console.log("> getUser id: %s", id)
    const user = await User.findByPk(id)
        .then(u => _.pick(u, ['id', 'firstName']))
        .catch(err => console.log(err))
    // const user =  await User.findOne({where: {id: id}})
    // // transform
    // const us = _.pick(user, ['id', 'firstName'])
    res.json({user: user})
}



const getUsers = async function (req, res, next) {
    const users = await User.findAll({order: [['createdAt', 'DESC']]});
    res.json({users: users.map(u => u.toJSON())});
}

const createUser = async function (req, res, next) {
    const {firstName, lastName} = req.body;
    const user = await User.create({firstName: firstName, lastName: lastName})
    return (res.json({code: 0, user: user.toJSON()}))
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUser: getUser
};

