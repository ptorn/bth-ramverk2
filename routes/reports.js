"use strict";

const express = require('express');
const router = express.Router();
const reportController = require("../src/report/reportController");


router.get('/:report', (req, res) => {
    reportController.getReport(req, res);
});
/* GET home page. */
// router.get('/', function(req, res) {
//     reportController.getReports(req, res);
// });
module.exports = router;
