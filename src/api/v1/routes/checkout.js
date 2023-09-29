var express = require('express');
var router = express.Router();

const checkoutController = require('../controllers/checkout.controller');
const { checkout } = require('../validations/checkout.validation');

router.get('/api/v1/checkout', checkoutController.getAll);
router.get('/api/v1/checkout/:id', checkoutController.findById);
router.post('/api/v1/checkout', checkout(), checkoutController.create);
router.put(
  '/api/v1/checkout/:id',
  checkout(),
  checkoutController.update,
);

router.delete('/api/v1/checkout/:id', checkoutController.destory);

module.exports = router;
