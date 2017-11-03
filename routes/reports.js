"use strict";

const express = require('express');
const router = express.Router();
const reportController = require("../src/report/reportController");

/* GET home page. */
router.get('/:report', function(req, res) {
    reportController.getReport(req, res);
});

module.exports = router;
