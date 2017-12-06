/**
 * Setting up a Mongo DB connection and include methods to handle data.
 */
"use strict";

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/ramverk2";

const dbConnection = {
    db: null,
    connect: async function() {
        try {
            this.db = await mongo.connect(dsn);
        } catch (e) {
            console.log(e);
        }
    },
    findInCollection: async function (colName, criteria, projection, limit=0) {
        try {
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.find(criteria, projection).limit(limit).toArray();

            await this.close();
            console.log(res);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    deleteMany: async function (colName) {
        await this.connect();
        const col = await this.db.collection(colName);

        col.deleteMany();
        await this.close();
    },
    // returns boolean and id
    insertOne: async function (colName, object) {
        try {
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.insertOne(object);

            await this.close();
            return res;
        } catch (e) {
            console.log(e);
        }
    },
    insertMany: async function (colName, objects) {
        try {
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.insertMany(objects);

            await this.close();
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    close: async function () {
        await this.db.close();
    }
};

module.exports = dbConnection;
