var mongoose = require('mongoose');


var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  published_date: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});


module.exports=mongoose.model("blogs",blogSchema);
