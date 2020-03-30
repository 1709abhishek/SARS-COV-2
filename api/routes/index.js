const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

//route for registering patients
router.post('/register-patients', homeController.register);

// routing to doctors
router.use('/doctors', require('./doctors'));

// routing to patients
router.use('/patients', require('./patients'));



module.exports = router;