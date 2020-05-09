const express = require('express');

const router = express.Router();


//importing the model
const doctorController = require('../../../controllers/api/v1/doctorController');

//route for doctor register
router.post('/register', doctorController.register);

//route for doctor login
router.post('/login', doctorController.login);

console.log('router loaded');

module.exports = router;