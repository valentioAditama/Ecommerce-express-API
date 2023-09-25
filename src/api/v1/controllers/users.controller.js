const User = require('../models/users');

exports.getAllUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error"});
            return;
        }
        res.json(result);
    });
};

exports.getFindId = (req, res) => {
    const userId = req.query.id;

};

exports.create = (req, res) => {
    const fullname = req.body.fullname; 
    const email = req.body.email; 
    const password = req.body.password; 
    const role = req.body.role; 
    const is_active = req.body.is_active; 

    User.create(fullname, email, password, role, is_active, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error"});
            return;
        }

        res.json(result);
    })
}