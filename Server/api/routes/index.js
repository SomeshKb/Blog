var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlblog = require('../controllers/blogController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/authorName/:id', ctrlProfile.authorName);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/blog', ctrlblog.create);

router.put('/blog/update/likes/:_id', ctrlblog.updateLike);

router.put('/blog/update/comments/:id', ctrlblog.addComments);

router.put('/blog/update/:id', ctrlblog.updateBlog);

router.post('/blog/create', ctrlblog.create);

router.get('/user/blog/:id', ctrlProfile.userBlogs);

router.get('/blog/all', ctrlblog.findAll);
router.get('/blog/user/likes/:id', ctrlblog.findUserLikes);

router.get('/blog/:_id', ctrlblog.findOne);

router.get('/user/likes/:id', ctrlblog.findUserLikes);

router.delete('/blog/remove/:id', ctrlblog.deletePost);


module.exports = router;
