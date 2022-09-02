const Passenger = require('../models/passenger');


function newPassenger(req, res) {
    res.render('passengers/new', { taxiId: req.params.id });
}

function create (req, res) {
    taxiId = req.params.id;
    req.body.taxi = taxiId;
    Passenger.create(req.body, function (err, passenger) {
        res.redirect(`/taxi/${taxiId}`);
    });
}
function deletePassenger(req, res) {
    Passenger.findById(req.params.id).populate('taxi').exec(function (err, passenger) {
        Passenger.findByIdAndDelete(req.params.id, function (err) {
            res.redirect(`/taxi/${passenger.taxi._id}`);
        });
    });
}


module.exports ={
    new: newPassenger,
    create,
    delete: deletePassenger
};