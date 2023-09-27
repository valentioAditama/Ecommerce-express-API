var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./src/config/database');
var usersRouter = require('./src/api/v1/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouter);

const jwt = require('jsonwebtoken');
require('dotenv').config();

app.post("/login/generateToken",(req, res) => {

// Access the JWT secret key from the environment variables.
const secretKey = process.env.JWT_SECRET_KEY;

// Payload data to include in the token.
const payload = { username: "root" };

// Generate a JWT token with the payload and secret key.
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

res.send(token);
});

app.post("/login/checkJWT",(req, res) => {

    // Access the JWT secret key from the environment variables.
    const secretKey = process.env.JWT_SECRET_KEY;
    
    // Payload data to include in the token.
    const payload = { username: "root" };
    
    // Generate a JWT token with the payload and secret key.
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    
    res.send(token);
    });

module.exports = app;
