const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

// routing to doctors
router.use('/doctors', require('./doctors'));

// routing to patients
router.use('/patients', require('./patients'));

//route for registering patients
router.post('/register-patients', function(req,res){
    homeController.register
});


module.exports = router;