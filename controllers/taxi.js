const Taxi = require('../models/taxi');
const Passenger = require('../models/passenger');
const User = require('../models/user')

function index(req, res){
    Taxi.find({userEmail: req.user.email}, function(err, taxis){
        if (err) return res.redirect('/');
        res.render('taxi/index',{title: 'Goober - User Dashboard', taxis})
    });
}

function show(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        Passenger.find({taxi: taxi._id}, function(err, passengers){
            res.render('taxi/show', {title: 'Taxi Detail', taxi, passengers});
        });
    });
}

function index2(req, res){
    Taxi.find({userEmail: req.user.email}, function(err, taxis){
        if (err) return res.redirect('/');
        res.render('taxi/index2',{taxis})
    });
}

function newTaxi(req, res){
    res.render('taxi/new', {title: 'Goober - Request New Ride'});
}

function create(req, res){
    req.body.userName = req.user.name;
    req.body.userEmail = req.user.email;
	Taxi.create(req.body);
	console.log(req.body);
	res.redirect('/taxi');
}

function deleteTaxi(req, res, next) {
    Taxi.findByIdAndDelete(req.params.id, function(err, taxi){
        res.redirect('/taxi');
    });
}

function edit(req, res) {
    Taxi.findById(req.params.id, function(err, taxi) {
        Passenger.find({taxi: taxi._id}, function(err, passengers){
            res.render('taxi/update', {title: 'Edit Trip', taxi, passengers});
        });
    });
  }

  function update(req, res) {
    Taxi.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        function(err, taxi) {
            if (err || !taxi) return res.redirect('/taxi');
            res.redirect(`/taxi/${taxi._id}`);
          }
        );
  }

module.exports = {
    index,
    new: newTaxi,
    create,
    show,
    delete: deleteTaxi,
    edit, 
    update,
    index2
};