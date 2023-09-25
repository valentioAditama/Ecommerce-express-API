const db = require('../models/users');
const User = db.users;

// create
exports.create = (req, res) => {
    // const user = {
    //     fullname: req.body.fullname, 
    //     email: req.body.email, 
    //     password: req.body.password, 
    //     role: req.body.role, 
    //     is_active: req.body.is_active
    // };
    // res.json({user});

    db.get(req.con, (error, result) => {
        res.json(result)
    });

    db.create(req.con, (error, result) => {
        Biodata.create(req.con, req.body, function(err, result) {
            res.send(result)
        })
    });
}

// get all

// find id 

// update 

// delete