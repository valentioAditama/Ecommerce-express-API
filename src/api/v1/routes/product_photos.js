var express = require('express');
var router = express.Router();

const productPhotosController = require('../controllers/product_photos.controller');
const { productsPhotosValidation } = require('../validations/product_photos.validation');

router.get('/api/v1/product_photos', productPhotosController.getAll);
router.get('/api/v1/product_photos/:id', productPhotosController.findById);
router.post('/api/v1/product_photos', productsPhotosValidation(), productPhotosController.create);
router.put(
  '/api/v1/product_photos/:id',
  productsPhotosValidation(),
  productPhotosController.update,
);

router.delete('/api/v1/product_photos/:id', productPhotosController.destory);

module.exports = router;
