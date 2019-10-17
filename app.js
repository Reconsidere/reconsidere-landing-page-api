const express = require('express');
var app = express();
var UserController = require('./ContactController');
app.use('/contact', UserController);
module.exports = app;