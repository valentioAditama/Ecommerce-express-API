const { config } = require('dotenv');
var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');

function authenticationUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      code: 401,
      status: 'Unauthorized',
      message: 'Authentication failed: No token provided',
    });
  }

  jwt.verify(token, config.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(404).json({
        code: 403,
        status: 'Forbidden',
        message: 'Authentication failed: Invalid Token',
      });
    }

    req.user = user;
    next();
  });
}

module.exports = authenticationUser;
