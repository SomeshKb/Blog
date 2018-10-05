var mongoose = require("mongoose")
var Blog = mongoose.model("blogs")

exports.create = (req, res) => {

  const blog = new Blog({
    title: req.body.title,
    authorName: req.body.authorName,
    authorID: req.body.authorID,
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
        message: err.message || "Some error occurred while retrieving blog record."
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

exports.updateLike = (req, res) => {

  Blog.updateOne({
      '_id': req.params._id
    }, {
      $addToSet: {
        "like": req.body._id
      }
    })
    .then(res.send())
    .catch(err => {
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


// find likes per user
exports.findUserLikes = (req, res) => {

  //  db.blog.aggregate([{$match:{authorName:"Nayan"}},{$group:{_id:"$authorName",total:{$sum:{$size:'$like'}} }},{$project:{'_id':0}}])

  Blog.aggregate({
      '$match': {
        'authorID': req.params.id
      }
    }, {
      '$group': {
        "_id": "authorID",
        total: {
          $sum: {
            $size: '$like'
          }
        }
      }
    }, {
      $project: {
        '_id': 0
      }
    })
    .then(result => {
      res.send(result[0])
    })
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
}

exports.deletePost = (req, res) => {
  Blog.deleteOne({
      _id: req.params.id
    })
    .then(result => {
      res.send("Record deleted")
    })
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
}


exports.addComments = (req, res) => {
  Blog.updateOne({
      '_id': req.params.id
    }, {
      $addToSet: {
        "comments": req.body
      }
    })
    .then(res.send())
    .catch(err => {
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