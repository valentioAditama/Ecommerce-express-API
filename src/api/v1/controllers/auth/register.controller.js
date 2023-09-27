// const { validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');
// const User = require('../../models/users.model');

// exports.create = async (req, res) => {
//   try {
//     // Validate request data
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         code: 400,
//         status: 'BAD_REQUEST',
//         message: errors.array(),
//       });
//     }

//     const password = req.body.password;
//     const encryptedPassword = await bcrypt.hash(password, 10);

//     const { fullname, email } = req.body;
//     const role = 1;
//     const is_active = 1;

//     User.create(fullname, email, encryptedPassword, role, is_active, (err, result) => {
//       if (err) {
//         // code mysql error duplicate email
//         res.status(400).json({
//           code: 400, 
//           status: 'BAD_REQUEST',
//           message: 'Email has already have',
//         });
//       } else {
//         res.status(201).json({
//           code: 201, 
//           status: 'DATA CREATED OK',
//           data: result
//         });
//       }
//     })
  
//     // Create a new user

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       code: 500,
//       status: 'INTERNAL_SERVER_ERROR',
//     });
//   }
// };
