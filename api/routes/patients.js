const express = require('express');

const router = express.Router();


//importing the model
const patientController = require('../controllers/patientsController');


router.post('/:id/create_report', patientController);

router.post('/:id/all_reports', patientController);


module.exports = router;