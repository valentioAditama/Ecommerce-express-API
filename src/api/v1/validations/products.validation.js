const { check } = require('express-validator');

exports.productsValidation = () => [
  check('user_id')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('User Id is required'),
  check('title').notEmpty().withMessage('Title is required'),
  check('price')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Price is required'),
  check('product_detail').notEmpty().withMessage('Product detail is required'),
];
