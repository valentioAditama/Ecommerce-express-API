// controller/users.controller.js

const usersService = require('../services/users.service');

class UsersController {
    constructor() {}

    // get all data
    async index(req, res) {
        const users = await usersService.getAll();
        res.json(users);
    }
    
    // get one data by id
    async show(req, res) {
        const user = await usersService.getOne(req.params.id);
        res.json(user);
    }

    // create data 
    async create(req, res) {
        const user = await usersService.create(req.body);
        res.json(user);
    }

    // update data by id
    async update(req, res) {
        const user = await usersService.update(req.params.id, req.body);
        res.json(user);
    }

    // delete data by id 
    async destroy(req, res) {
        const user = await usersService.delete(req.params.id);
        res.json({ message: 'User deleted successfully'});
    }
}

module.exports = new UsersController();