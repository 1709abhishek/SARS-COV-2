const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.post('/register-patients', homeController.register);

router.use('/doctors', require('./doctors'));

router.use('/patients', require('./patients'));



module.exports = router;