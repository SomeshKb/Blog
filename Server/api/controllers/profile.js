var mongoose = require('mongoose');
var User = mongoose.model('User');
var Blog = mongoose.model("blogs")

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};


module.exports.authorName = function(req,res){

  
  User.findOne({_id:req.params.id},{_id:0,name:1})
  .then(result=>{res.send(result)})
  .catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Not found  " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Error while retrieving Data " + req.params.id
    });
  });
  };


  module.exports.userBlogs = function(req,res){
  
    Blog.find({authorID:req.params.id})
    .then(result=>{res.send(result)})
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Not found  author with ID" + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error while retrieving Blog by author with ID " + req.params.id
      });
    });
    };
