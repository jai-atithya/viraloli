const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        gameName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Game", gameSchema);