const crypto = require('crypto');
const app=require('express');
const body_parser=require('body-parser');


const secret = 'password';
const hash = crypto.createHmac('sha256', secret)
                   .update('Data is encrypted')
                   .digest('hex');
console.log(hash);

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); 
var config = require('./config'); 
var User   = require('./app/models/user');


var port = process.env.PORT || 8080; 
mongoose.connect(config.database); 
app.set('superSecret', config.secret); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
