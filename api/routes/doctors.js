const express = require('express');

const router = express.Router();


//importing the model
const doctorController = require('../controllers/doctorController');


router.post('/register', doctorController.register);

router.post('/login', doctorController.login);

console.log('router loaded');

module.exports = router;