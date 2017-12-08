"use strict";

const db = require("../database/database.js");
const reset = require("./setup.js");
const albumController = {
    getAllAlbums: async (req, res) => {
        try {
            // await reset.resetCollection(db);
            let result = await db.findInCollection("albums", {}, {});

            res.json(result);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },
    postAddOneAlbum: async (req, res) => {
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
    },
    postUpdateOneAlbum: async (req, res) => {
        try {
            await db.updateOne("albums", "_id", req.body._id, req.body);
            await res.end();
        } catch (e) {
            console.log(e);
        }
    },
    deleteOneAlbum: async (req, res) => {
        try {
            await db.deleteOne("albums", "_id", req.body._id);
            await res.end();
        } catch (e) {
            console.log(e);
        }
    }
};

module.exports = albumController;
