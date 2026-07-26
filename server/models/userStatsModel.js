const mongoose = require("mongoose");

const userStatsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        currentStreak: {
            type: Number,
            default: 0,
            min: 0
        },

        maxStreak: {
            type: Number,
            default: 0,
            min: 0
        },

        lastActiveDate: {
            type: Date,
            default: null,
        },

        lessonsCompleted: {
            type: Number,
            default: 0,
            min: 0
        },

        unitsCompleted: {
            type: Number,
            default: 0,
            min: 0
        },

        accuracy: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("UserStats", userStatsSchema);