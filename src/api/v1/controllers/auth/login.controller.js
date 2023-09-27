const User = require('../../models/users.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../../../../config/database');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // retrive the user from the database
    db.query(`select * from users where email = '${email}'`, (err, result) => {
      if (result.length == 0) {
        return res.status(400).json({
          code: 400,
          status: 'NOT FOUND',
        });
      }

      return res.send(result[0].password);
    });

    // const user = rows[0];

    // // compare the provided password with the stored hash
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //     return res.status(400).json({
    //         code: 400,
    //         status: "BAD REQUEST",
    //         message: "Invalid Password"
    //     });
    // }

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
