"use strict";
const db = require("../database/database.js");
const reset = require("./setup.js");
const albumController = {
    getAllAlbums: async (req, res) => {
        try {
            // await reset.resetCollection(db);
            let result = await db.findInCollection("albums", {}, {});

            console.log(result);
            res.json(result);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },
    postAddAlbum: async (req, res) => {
        try {
            await db.insertOne("albums", req.body);
            await res.end();
        } catch (e) {
            console.log(e);
        }
    },
    getReset: async (req, res) => {
        await reset.resetCollection(db);
        res.end();
    }

};



module.exports = albumController;
