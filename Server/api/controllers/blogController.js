var mongoose = require("mongoose")
var Blog = mongoose.model("blogs")

exports.create = (req, res) => {

  if (!req.body.title || !req.body.author || !req.body.likes ||
    !req.body.content || !req.body.published_date) {

    return res.status(400).send({
      message: "Get all the Input Field"
    });
  }
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    likes: req.body.likes,
    content: req.body.content,
    published_date: req.body.published_date,
  });

  blog.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the blog Record."
      });
    });

}


//get data

exports.findAll = (req, res) => {
  Blog.find()
    .then(blog => {
      res.send(blog);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving student record."
      });
    });

};


// Find a single blog
exports.findOne = (req, res) => {
  Blog.findOne({
      '_id': req.params._id

    }) // search by id
    .then(blog => {
      res.send(blog);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Blog not found  " + req.params._id
        });
      }
      return res.status(500).send({
        message: "Error while retrieving blog " + req.params._id
      });
    });
};

//db.blogs.updateOne({title:"StackOverFlow "},{$inc:{likes:1}});

exports.updateLike = (req, res) => {
  console.log(req);

  Blog.updateOne({
      '_id': req.params._id
    }, {
      $inc:{"like.count":1},$push:{"like.users":req.body._id}
    })
    .then(res.send())

  // Blog.update({
  //     '_id': req.params._id
  //   }, {
  //     $inc: {
  //       likes: 1
  //     }
  //   })
  //   .then(blog=>res.send(blog))
  //   .catch(err => {
  //     if (err.kind === 'ObjectId') {
  //       return res.status(404).send({
  //         message: "Blog not found  " + req.params._id
  //       });
  //     }
  //     return res.status(500).send({
  //       message: "Error while retrieving blog " + req.params._id
  //     });
  //   });
};
