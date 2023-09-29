var express = require('express');
var router = express.Router();

const productAttributesController = require('../controllers/product_attributes.controller');
const { productAttributesValidation } = require('../validations/product_attributes.validation');

router.get('/api/v1/product_attributes', productAttributesController.getAll);
router.get('/api/v1/product_attributes/:id', productAttributesController.findById);
router.post('/api/v1/product_attributes', productAttributesValidation(), productAttributesController.create);
router.put(
  '/api/v1/product_attributes/:id',
  productAttributesValidation(),
  productAttributesController.update,
);

router.delete('/api/v1/product_attributes/:id', productAttributesController.destory);

module.exports = router;
