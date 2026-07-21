const mongoose = require("mongoose");

const dailySessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        sessionDate: {
            type: Date,
            required: true,
        },

        pointsInXP: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

// One session per user per day
dailySessionSchema.index(
    { userId: 1, sessionDate: 1 },
    { unique: true }
);

module.exports = mongoose.model("DailySession", dailySessionSchema);