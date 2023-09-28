var express = require('express');
var router = express.Router();

const productPhotosController = require('../controllers/product_photos.controller');
const { validation } = require('../validations/product_photos.validation');

router.get('/api/v1/product_photos', productPhotosController.getAll);
router.get('/api/v1/product_photos/:id', productPhotosController.findById);
router.post('/api/v1/product_photos', validation(), productPhotosController.create);
router.put(
  '/api/v1/product_photos/:id',
  validation(),
  productPhotosController.update,
);

router.delete('/api/v1/product_photos/:id', productPhotosController.destory);

module.exports = router;
