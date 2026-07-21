const driver = process.env.STORAGE_DRIVER || "local";

let storage;

if (driver === "s3") {
    storage = require("./s3.js");
} else {
    storage = require("./local.js");
}

module.exports = storage;