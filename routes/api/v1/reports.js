const express = require('express');

const router = express.Router();

const reportController = require('../../../controllers/api/v1/report_controller');

// show status wise reports
router.get('/:status', reportController.showStatus);


module.exports = router;