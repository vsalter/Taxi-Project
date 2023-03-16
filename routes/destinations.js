const express = require('express');
const router = express.Router();


const destinationsCtrl = require ('../controllers/destinations');

router.post('/taxi/:id/destinations', destinationsCtrl.create);

module.exports = router;