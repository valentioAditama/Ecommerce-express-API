var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users.controller');
const { usersValidation } = require('../validations/users.validation');
const authenticateJWT = require('../middleware/auth');

router.get('/api/v1/users', authenticateJWT, usersController.getAllUsers);
router.get('/api/v1/users/:id', usersController.findById);
router.post('/api/v1/users', usersValidation(), usersController.create);
router.put('/api/v1/users/:id', usersValidation(), usersController.update);
router.delete('/api/v1/users/:id', usersController.destory);

module.exports = router;
