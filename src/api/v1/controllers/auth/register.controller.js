const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../../models/users.model');

exports.create = async (req, res) => {
  try {
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD_REQUEST',
        message: errors.array(),
      });
    }

    // Create a new user
    const { fullname, email, password } = req.body;
    const role = 1;
    const is_active = 1;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, 10, function (err, passwordHash) {
        User.create(
          fullname,
          email,
          passwordHash,
          role,
          is_active,
          (err, result) => {
            if (err.errno === 1062) {
              // code mysql error duplicate email
              res.status(400).json({
                code: 400,
                status: 'BAD_REQUEST',
                message: 'Email has already have',
              });
            } else {
              res.status(201).json({
                code: 201,
                status: 'DATA CREATED OK',
                data: result,
              });
            }
          },
        );
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
    });
  }
};
