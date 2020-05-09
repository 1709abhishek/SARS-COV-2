const express = require('express');

const router = express.Router();

const homeController = require('../../../controllers/api/v1/homeController');

// routing to doctors
router.use('/doctors', require('./doctors'));

// routing to patients
router.use('/patients', require('./patients'));

// routing to reports
router.use('/reports', require('./reports'));

//route for registering patients
router.post('/register-patients', homeController.register);


module.exports = router;