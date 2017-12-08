"use strict";

const express = require('express');
const router = express.Router();
const albumController = require("../src/album/albumController");


router.get('/listall', (req, res) => {
    albumController.getAllAlbums(req, res);
});

router.post('/add', (req, res) => {
    albumController.postAddOneAlbum(req, res);
});

router.post('/update', (req, res) => {
    albumController.postUpdateOneAlbum(req, res);
});

router.delete('/delete', (req, res) => {
    albumController.deleteOneAlbum(req, res);
});

router.get('/reset', (req, res) => {
    albumController.getReset(req, res);
});
/* GET home page. */
// router.get('/', function(req, res) {
//     reportController.getReports(req, res);
// });
module.exports = router;
