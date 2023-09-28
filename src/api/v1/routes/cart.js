var express = require('express');
var router = express.Router();

const cartController = require('../controllers/cart.controller');
const { validation } = require('../validations/cart.validation');

router.get('/api/v1/cart', cartController.getAll);
router.get('/api/v1/cart/:id', cartController.findById);
router.post('/api/v1/cart', validation(), cartController.create);
router.put(
  '/api/v1/cart/:id',
  validation(),
  cartController.update,
);

router.delete('/api/v1/cart/:id', cartController.destory);

module.exports = router;
