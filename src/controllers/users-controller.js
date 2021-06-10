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
    const users = await User.findAll({order: [['createdAt', 'DESC']]})
        .then(users => users.map( u => ({...u.toJSON(), fullName: u.fullName}))) ;
    res.json({users: users});
}

const createUser = async function (req, res, next) {
    const {firstName, lastName, password, email} = req.body;
    const user =  User.build({firstName: firstName,
        lastName: lastName,
        email: email,
        password: password})
    await user.save();
    return (res.json({code: 0, user: user.toJSON()}))
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUser: getUser
};

