const express = require('express');

const router = express.Router();

const reportController = require('../../../controllers/api/v1/reportController');

router.get('/:status', reportController.showStatus);


module.exports = router;