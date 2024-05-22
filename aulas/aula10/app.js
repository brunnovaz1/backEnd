var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var routerApidocs = require('./routes/router_apidocs');
var routerProdutos = require('./routes/router_produtos');
const url = process.env.MONGODB_URL

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', routerApidocs);
app.use('/produtos', routerProdutos);

module.exports = app;
