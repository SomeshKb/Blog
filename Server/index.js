var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var blogRoutes = require('./router/blog.router')

app.use('/',blogRoutes);

var userRoutes = require('./router/user.router')

app.use('/',userRoutes);


//Other routes here
app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});


app.listen(8000);