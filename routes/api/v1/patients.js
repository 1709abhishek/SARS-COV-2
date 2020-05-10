const express = require('express');

const router = express.Router();
const passport = require('passport');


//importing the model
const patientController = require('../../../controllers/api/v1/patient_controller');

//route for creating a report***********authenticated
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.create);

//route for showing all reports***********authentucated
router.post('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.showAll);


module.exports = router;