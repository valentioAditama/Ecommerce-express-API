const { check } = require('express-validator');

exports.userValidationRules = () => [
  check('fullname').notEmpty().withMessage('Fullname is required'),
  check('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('role').notEmpty().withMessage('Role is required'),
  check('is_active').notEmpty().withMessage('is_active is required'),
];
