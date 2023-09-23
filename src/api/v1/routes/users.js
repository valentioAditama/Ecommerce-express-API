var express = require('express');
const usersController = require('../controllers/users.controller');
var router = express.Router();

const app = express();

app.get('/users', usersController.index);
app.get('/users/:id', usersController.show);
app.post('/users', usersController.create);
app.put('/users/:id', usersController.update)
app.delete('/users/:id', usersController.destroy);

module.exports = router; 