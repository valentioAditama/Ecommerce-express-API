const db = require('../models/users');
const User = db.users;

// create
exports.create = (req, res) => {
    const user = {
        fullname: req.body.fullname, 
        email: req.body.email, 
        password: req.body.password, 
        role: req.body.role, 
        is_active: req.body.is_active
    };
}

// get all

// find id 

// update 

// delete