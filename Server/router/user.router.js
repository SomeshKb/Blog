const express = require('express');
const router = express.Router();
var fs = require("fs");
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const secret = 'password';


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/blog/register', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
             
      result=JSON.parse(data);
//      console.log(req.body.password='hi');

      result.user.push(req.body);
      fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  
  
      });
    res.end();
    });
  
  
    router.get('/blog/login', function (req, res) {
      fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
               
        result=JSON.parse(data);
        
        result.user.push(req.body);
        console.log(result.user.map(x=>x));
        fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  
    
        });
      res.end();
      });
  module.exports = router