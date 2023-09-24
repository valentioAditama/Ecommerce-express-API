const Users = require('../controllers/users.controller');

module.exports = new class UsersModel extends Users {
    constructor(){
        super('users');
    }
}