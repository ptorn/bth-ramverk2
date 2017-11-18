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
    }
};

module.exports = reportController;
