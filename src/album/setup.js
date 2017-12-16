/**
 * Connect to the database and setup it with some default data.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));

const reset = {
    /**
     * Reset a collection by removing existing content and insert a default
     * set of documents.
     *
     * @async
     *
     * @param {string} dsn     DSN to connect to database.
     * @param {string} colName Name of collection.
     * @param {string} doc     Documents to be inserted into collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Promise<void>} Void
     */
    resetCollection: async (dbObject, colName = "albums") => {
        try {
            const db  = dbObject;

            await db.delete(colName);
            await db.insert(colName, docs);
        } catch (e) {
            console.log(e);
        }
    }
};

module.exports = reset;
