const { check } = require('express-validator');

exports.productsPhotosValidation = () => [
  check('products_id')
    .isNumeric()
    .withMessage('Must Numeric')
    .notEmpty()
    .withMessage('Product Id is required'),
  check('path').notEmpty().withMessage('path is required'),
];
