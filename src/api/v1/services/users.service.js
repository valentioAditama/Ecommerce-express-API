//  services/users.services.js

const UserModel = require('../models/users');

class UserService {
    constructor() {}

    async getAll() {
        const users = await UserModel.findAll();
        return users;
    }

    async getOne(id) {
        const user = await UserModel.findById(id);
        return user; 
    }

    async create(user) {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser;
    }

    async update(id, user) {
        const userToUpdate = await UserModel.findById(id);
        userToUpdate.fullname = user.fullname; 
        userToUpdate.email = user.email;
        userToUpdate.password = user.password;
        userToUpdate.role = user.role;
        userToUpdate.is_active = user.is_active;
        await userToUpdate.save();
        return userToUpdate;
    }

    async delete(id) {
        await UserModel.findByIdAndDelete(id);
    }
}

module.exports = new UserService();