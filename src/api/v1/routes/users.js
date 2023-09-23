var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

router.get('/api/v1/users', usersController.index);
router.get('/api/v1/users/:id', usersController.show);
router.post('/api/v1/users', usersController.create);
router.put('/api/v1/users/:id', usersController.update)
router.delete('/api/v1/users/:id', usersController.destroy);

module.exports = router; 