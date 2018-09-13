const express = require('express');
const router = express.Router();
var fs = require("fs");
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/blog/all', function (req, res) {

    fs.readFile( __dirname+"/data.json", 'utf8', function (err, data) {
     
        result=JSON.parse(data);
        blogs=( JSON.stringify(result.data));
        res.end( blogs );
  })
})

router.get('/blog/:id', function (req, res) {
    fs.readFile( __dirname  + "/data.json", 'utf8', function (err, data) {
 
    result=JSON.parse(data);
    blogs=result.data;
            
     res.end(JSON.stringify((blogs.filter(blog=>blog.id==req.params.id))[0]) );
    });
 })


 router.post('/blog/like/:id', function (req, res) {

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

module.exports = router