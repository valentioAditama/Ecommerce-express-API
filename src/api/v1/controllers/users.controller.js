const db = require('../../../config/database');

// const usersService = require('../services/users.service');
// const userValidation = require('../validations/users.validation');

// class UsersController {
//     constructor() {}

//     // get all data
//     async index(req, res) {
//         const users = await usersService.getAll();
//         res.json(users);
//     }
    
    // // get one data by id
    // async show(req, res) {
    //     const user = await usersService.getOne(req.params.id);
    //     res.json(user);
    // }

    // // create data 
    // async create(req, res) {
    //     // validate the request data 
    //     const validationErrors = await userValidation.create(req.body);
    //     if (validationErrors.length > 0) {
    //         return res.status(400).send(validationErrors);
    //     }
        
    //     // create the user
    //     const user = await usersService.create(req.body);
    //     res.json(user);
    // }

    // // update data by id
    // async update(req, res) {
    //     // validate the request data 
    //     const validationErrors = await userValidation.update(req.body);
    //     if (validationErrors.length > 0) {
    //         return res.status(400).send(validationErrors);
    //     }
        
    //     // update the user
    //     const user = await usersService.update(req.params.id, req.body);
    //     res.json(user);
    // }

    // // delete data by id 
    // async destroy(req, res) {
    //     const user = await usersService.delete(req.params.id);
    //     res.json({ message: 'User deleted successfully'});
    // }
// }

// module.exports = new UsersController();

// module.exports = class Users {
//     constructor(table) {
//         this.table = table;
//     }

//     // get all data
//     index(req, res) {
//         // const users = usersService.getAll();
//         // res.json(users);
//         console.log("hello");
//     }
// }