const mongoose = require("mongoose");

const bloomSchema = new mongoose.Schema({
    numBits: {
        type: Number,
        required: true
    },
    numHashes: {
        type: Number,
        required: true
    },
    buffer: {
        type: Buffer,
        required: true
    },
    expectedItems: {
        type: Number,
        required: true
    },
    falsePositiveRate: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("BloomFilter", bloomSchema);