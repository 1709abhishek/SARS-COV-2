const express = require('express');

const router = express.Router();


//importing the model
const patientController = require('../controllers/patientsController');

//route for creating a report
router.post('/:id/create_report', patientController.create);

//route for showing all reports
router.post('/:id/all_reports', patientController.showAll);


module.exports = router;