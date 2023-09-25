var express = require("express");
var router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/api/v1/users', usersController.getAllUsers);
router.get('/api/v1/users/:id', usersController.getFindId);
router.post('/api/v1/users', usersController.create);
// router.put('/api/v1/users/:id', usersController.update)
// router.delete('/api/v1/users/:id', usersController.destroy);

module.exports = router;
