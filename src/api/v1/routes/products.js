var express = require('express');
var router = express.Router();

const productController = require('../controllers/products.controller');
const { productsValidation } = require('../validations/products.validation')

router.get('/api/v1/product', productController.getAll);
router.get('/api/v1/product/:id', productController.findById);
router.post('/api/v1/product', productsValidation(), productController.create);
router.put(
  '/api/v1/product/:id',
  productsValidation(),
  productController.update,
);
router.delete('/api/v1/product/:id', productController.destory);

module.exports = router;
