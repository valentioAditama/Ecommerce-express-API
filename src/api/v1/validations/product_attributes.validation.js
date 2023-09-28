const { check } = require('express-validator');

exports.productAttributesValidation = () => [
  check('products_id')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Id is required'),
  check('products_size').notEmpty().withMessage('Product Size is required'),
];
