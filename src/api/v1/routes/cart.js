var express = require('express');
var router = express.Router();

const cartController = require('../controllers/cart.controller');
const { cart } = require('../validations/cart.validation');

router.get('/api/v1/cart', cartController.getAll);
router.get('/api/v1/cart/:id', cartController.findById);
router.post('/api/v1/cart', cart(), cartController.create);
router.put(
  '/api/v1/cart/:id',
  cart(),
  cartController.update,
);

router.delete('/api/v1/cart/:id', cartController.destory);

module.exports = router;
