// const crypto = require('crypto');
// const app=require('express');
// const body_parser=require('body-parser');


// const secret = 'password';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('Data is encrypted')
//                    .digest('hex');
// console.log(hash);

// var express     = require('express');
// var app         = express();
// var bodyParser  = require('body-parser');
// var morgan      = require('morgan');
// var mongoose    = require('mongoose');

// var jwt    = require('jsonwebtoken'); 
// var config = require('./config'); 
// var User   = require('./app/models/user');


// var port = process.env.PORT || 8080; 
// mongoose.connect(config.database); 
// app.set('superSecret', config.secret); 

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// app.get('/', function(req, res) {
//     res.send('Hello! The API is at http://localhost:' + port + '/api');
// });

// app.listen(port);
// console.log('Magic happens at http://localhost:' + port);


var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/blog/all', function (req, res) {
   fs.readFile( __dirname  + "/data.json", 'utf8', function (err, data) {

     result=JSON.parse(data);

     blogs=( JSON.stringify(result.data));


     res.end( blogs );
   });
})


app.get('/blog/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
 
    result=JSON.parse(data);
    blogs=result.data;
            
     res.end(JSON.stringify((blogs.filter(blog=>blog.id==req.params.id))[0]) );
    });
 })


 app.post('/blog/like/:id', function (req, res) {

        fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
           
            result=JSON.parse(data);
            result.data=result.data.filter((blog)=>{
             if(blog.id==req.params.id){
               blog.likes=blog.likes+1;
            }
            return blog;
            });

            fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  

    res.end();
});
 })




 app.post('/blog/register', function (req, res) {
  fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
           
    result=JSON.parse(data);
    
    result.user.push(req.body);
    console.log(result.user.map(x=>x));
    fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  

    });
  res.end();
  });


  app.get('/blog/login', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
             
      result=JSON.parse(data);
      
      result.user.push(req.body);
      console.log(result.user.map(x=>x));
      fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  
  
      });
    res.end();
    });


var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})