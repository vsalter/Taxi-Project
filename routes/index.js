var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxi' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
] }
));

router.get('/auth/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : 'https://taxi-app-project2.herokuapp.com/taxi',
    failureRedirect : 'https://taxi-app-project2.herokuapp.com/' 
  }
));

router.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


module.exports = router;
