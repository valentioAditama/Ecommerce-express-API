var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users.controller');
const loginUsersController = require('../controllers/auth/login.controller');

const { validation } = require('../validations/users.validation');
const {
  loginValidation,
  registerValidation,
} = require('../validations/auth/auth.validaton');

router.post(
  '/api/v1/users/login',
  loginValidation(),
  loginUsersController.login,
);
router.post('/api/v1/users', validation(), usersController.create);
router.get('/api/v1/users', usersController.getAll);
router.get('/api/v1/users/:id', usersController.findById);
router.put('/api/v1/users/:id', validation(), usersController.update);
router.delete('/api/v1/users/:id', usersController.destory);

module.exports = router;
