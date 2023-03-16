const res = require('express/lib/response');
const Taxi = require('../models/taxi');

function create(req, res){
  
    Taxi.findById(req.params.id, function(error, taxi){
        taxi.destinations.push(req.body);
        taxi.save(function (error) {
            res.redirect(`/taxi/${taxi._id}`);
        });

    });
}

module.exports = {
    create,
}