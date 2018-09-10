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




 app.post('/blog/signup', function (req, res) {
  fs.readFile( __dirname + "/" + "data.json", 'utf8', function readFileCallback(err, data) {
           
    result=JSON.parse(data);
    
    result.user.push(req.body);
    console.log(result.user.map(x=>x));
    fs.writeFileSync(__dirname+'/data.json',JSON.stringify(result), 'utf8');  

    });
  res.end();
  });

  app.post('/blog/login', function (req, res) {
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