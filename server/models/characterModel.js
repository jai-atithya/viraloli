const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    unlockLesson: {
        type: Number,
        required: true
    },

    keyMap: [[{
        code: String,
        altKey: Boolean,
        ctrlKey: Boolean,
        shiftKey: Boolean,
        metaKey: Boolean
    }]]
});

module.exports = mongoose.model("Characters", characterSchema);