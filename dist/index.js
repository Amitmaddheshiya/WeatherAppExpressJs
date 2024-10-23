"use strict";

var express = require('express');
var path = require('path');
var hbs = require('hbs');
var app = express();
var port = process.env.PORT || 3000;

// Handlebars
var templatePath = path.join(__dirname, '../templates/views');
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Serve static files
var publicPath = path.join(__dirname, '../public');
app.use(express["static"](publicPath));
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/weather', function (req, res) {
  res.render('weather');
});
app.get('*', function (req, res) {
  res.render('404error');
});
app.listen(port, function () {
  console.log("App listening on port ".concat(port));
});