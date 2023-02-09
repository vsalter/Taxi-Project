var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Goober' });
});

router.get('/faqs', function(req, res, next) {
  res.render('faqs', { title: 'Goober FAQs' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Goober' });
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
    successRedirect : '/taxi',
    failureRedirect : '/' 
  }
));

router.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


module.exports = router;
