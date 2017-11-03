"use strict";

const express = require('express');
const router = express.Router();
const fs = require("fs");

const reportController = {
    getReport : (req, res) => {
        let reportName = req.params.report;
        fs.readFile("content/reports/" + reportName + ".md", "utf8", (err, data) => {
            console.log(data);
            res.json({
                title: reportName,
                content: data
            });
        });


    }
};
module.exports = reportController;
