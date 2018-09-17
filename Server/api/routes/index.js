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

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/blog', ctrlblog.create);

router.get('/blog/update/likes/:_id', ctrlblog.updateLike);


router.get('/blog/all', ctrlblog.findAll);

router.get('/blog/:_id', ctrlblog.findOne);

module.exports = router;
