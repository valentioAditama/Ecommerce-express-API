var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./src/config/database');
var usersRouter = require('./src/api/v1/routes/users');
var productRouter = require('./src/api/v1/routes/products');
var productPhotosRouter = require('./src/api/v1/routes/product_photos');
var productAttributesRouter = require('./src/api/v1/routes/product_attributes');
var checkoutRouter = require('./src/api/v1/routes/checkout');
var cartRouter = require('./src/api/v1/routes/cart');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRouter);
app.use(productRouter);
app.use(productPhotosRouter); 
app.use(productAttributesRouter);
app.use(checkoutRouter);
app.use(cartRouter);


module.exports = app;
