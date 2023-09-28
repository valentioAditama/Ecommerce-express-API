const User = require('../../models/users.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../../../../config/database');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // retrive the user from the database
    db.query(
      `select * from users where email = '${email}'`,
      async (err, result) => {
        if (result.length > 0) {
          const comparison = await bcrypt.compare(password, result[0].password);
          if (comparison) {
            res.status(200).json({
              code: 200,
              status: 'OK',
              message: 'Successfully Login',
              data: result,
            });
          } else {
            res.status(401).json({
              code: 401,
              status: '401 Unauthorized',
              message: 'Email or password does not match',
            });
          }
        } else {
          res.status(404).json({
            code: 404,
            status: 'NOT FOUND',
            message: 'Email Not Found',
          });
        }
      },
    );

    // // store user information in the sesison
    // req.session.userId = user.id;
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
    });
  }
};
