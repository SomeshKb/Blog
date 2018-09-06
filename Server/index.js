var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

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

/*
 app.post('/update', function (req, res) {

    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
 
    result=JSON.parse(data);
 
    var counter=0;

    result.data=result.data.filter((blog)=>{
        if( blog.id==req.body.id){
            counter=1;
            blog.title= req.body.title;            
            return blog;
        }
        return blog;
    });

    if(counter==0){
        result.data.push(req.body);
    }

    fs.writeFileSync(__dirname+'/data/data.json',JSON.stringify(result), 'utf8');  

    res.end();
    });
 })




 app.delete('/delete/:id', function (req, res) {

        fs.readFile( __dirname + "/data/" + "data.json", 'utf8', function readFileCallback(err, data) {
 
    if(err){
            fs.close();
            res.send("Failed;")
    }
        else{
            result=JSON.parse(data);

 
            result.data=result.data.filter((blog)=>{
            
            return blog.id!=req.params.id;   
            })
            
            fs.writeFileSync(__dirname+'/data/data.json',JSON.stringify(result), 'utf8');  

        }
})



    res.end();
 })
*/


var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})