var express = require('express');
var router = express.Router();
const taxiCtrl = require ('../controllers/taxi');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/', isLoggedIn, taxiCtrl.index);
router.get('/new', isLoggedIn, taxiCtrl.new);
router.get('/:id', isLoggedIn, taxiCtrl.show);
router.post('/', isLoggedIn, taxiCtrl.create);
router.delete('/:id', isLoggedIn, taxiCtrl.delete);

router.get('/:id/update', isLoggedIn, taxiCtrl.edit);
router.put('/:id', isLoggedIn, taxiCtrl.update);


module.exports = router;
