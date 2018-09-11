
router.post('/register', function(req, res) {
  
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  });