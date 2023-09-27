var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users.controller');
const loginUsersController = require('../controllers/auth/login.controller');
const registerUsersController = require('../controllers/auth/register.controller');

const { usersValidation } = require('../validations/users.validation');
const {
  loginValidation,
  registerValidation,
} = require('../validations/auth/auth.validaton');

router.post(
  '/api/v1/users/login',
  loginValidation(),
  loginUsersController.login,
);
router.post(
  '/api/v1/users/register',
  registerValidation(),
  registerUsersController.create,
);

router.get('/api/v1/users', usersController.getAllUsers);
router.get('/api/v1/users/:id', usersController.findById);
router.post('/api/v1/users', usersValidation(), usersController.create);
router.put('/api/v1/users/:id', usersValidation(), usersController.update);
router.delete('/api/v1/users/:id', usersController.destory);

module.exports = router;
