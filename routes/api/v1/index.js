const express = require('express');

const router = express.Router();
const passport = require('passport');


const homeController = require('../../../controllers/api/v1/home_controller');

// routing to doctors
router.use('/doctors', require('./doctors'));

// routing to patients
router.use('/patients', require('./patients'));

// routing to reports
router.use('/reports', require('./reports'));

//route for registering patients***********authenticated
router.post('/register-patients', passport.authenticate('jwt', { session: false }), homeController.register);


module.exports = router;