"use strict";

const express = require('express');
const router = express.Router();
const albumController = require("../src/album/albumController");


router.get('/listall', (req, res) => {
    albumController.getAllAlbums(req, res);
});

router.post('/add', (req, res) => {
    albumController.postAddAlbum(req, res);
});

router.get('/reset', (req, res) => {
    albumController.getReset(req, res);
});
/* GET home page. */
// router.get('/', function(req, res) {
//     reportController.getReports(req, res);
// });
module.exports = router;
