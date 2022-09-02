var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taxi' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));


// Google call back route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
      successRedirect: '/taxi',
      failureRedirect: '/'
  }
));


// Google logout
router.get('/logout', function (req, res) {
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});


module.exports = router;
