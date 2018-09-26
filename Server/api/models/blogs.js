var mongoose = require('mongoose');


var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authorID: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  published_date: {
    type: String,
    required: true
  },
  like: {
    count:{type:Number},
    users:{type:Array}
  },
  content: {
    type: String,
    required: true
  }
});


module.exports=mongoose.model("blogs",blogSchema);
