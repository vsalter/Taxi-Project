const express = require('express');
const router = express.Router();
const passengersCtrl = require('../controllers/passengers')

router.post('/taxi/:id/passengers', passengersCtrl.create);
router.get('/taxi/:id/passengers/new', passengersCtrl.new);
router.delete('/passengers/:id', passengersCtrl.delete);

module.exports = router;