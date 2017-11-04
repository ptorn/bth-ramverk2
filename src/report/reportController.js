"use strict";

const fs = require("fs");

const reportController = {
    getReport: (req, res) => {
        let reportName = req.params.report;

        fs.readFile("content/reports/" + reportName + ".md", "utf8", (err, data) => {
            res.json({
                title: reportName,
                content: data
            });
        });
    },
    getReports: (req, res) => {
        fs.readFile("content/pages/report.md", "utf8", (err, data) => {
            res.json({
                title: "Redovisning",
                content: data
            });
        });
    },
};

module.exports = reportController;
