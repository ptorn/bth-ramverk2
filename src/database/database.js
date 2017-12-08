/**
 * Setting up a Mongo DB connection and include methods to handle data.
 */
"use strict";

// MongoDB
const mongo = require('mongodb').MongoClient;
const dsn =  process.env.DBWEBB_DSN || 'mongodb://localhost:27017/ramverk2';
var ObjectID = require('mongodb').ObjectID;

const dbConnection = {
    db: null,
    connect: async function() {
        try {
            this.db = await mongo.connect(dsn);
        } catch (err) {
            console.log(err);
        }
    },
    findInCollection: async function (colName, criteria, projection, limit=0) {
        try {
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.find(criteria, projection).limit(limit).toArray();

            await this.close();
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
    deleteOne: async function (colName, key, valueData) {
        try {
            let value = valueData;

            await this.connect();
            if (key == "_id") {
                value = ObjectID(valueData);
            }
            const col = await this.db.collection(colName);
            const res = await col.deleteOne({[key]: value});

            await this.close();
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    // returns boolean and id
    insertOne: async function (colName, object) {
        try {
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.insertOne(object);

            await this.close();
            return res;
        } catch (err) {
            console.log(err);
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
    },
    updateOne: async function (colName, key, value, object) {
        try {
            if (object['_id']) {
                delete object['_id'];
            }
            await this.connect();
            const col = await this.db.collection(colName);
            const res = await col.updateOne({'_id': ObjectID(value)}, {$set: object});

            await this.close();
            return res;
        } catch (err) {
            console.log(err);
        }
    },
};

module.exports = dbConnection;
