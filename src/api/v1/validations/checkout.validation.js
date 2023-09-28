const { check } = require('express-validator');

exports.checkout = () => [
  check('products_id')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Id is required'),
  check('totally')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Size is required'),
];
