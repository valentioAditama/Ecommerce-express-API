const { check } = require('express-validator');

exports.loginValidation = () => [
  check('email').exists().notEmpty().isEmail().withMessage('Invalid email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

exports.registerValidation = () => [
  check('fullname').notEmpty().withMessage('Fullname is required'),
  check('email').exists().notEmpty().isEmail().withMessage('Invalid email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];
