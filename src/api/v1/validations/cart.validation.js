const { check } = require('express-validator');

exports.cart = () => [
  check('products_id')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Id is required'),
  check('is_active')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Size is required'),
];
