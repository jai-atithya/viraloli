const DailySession = require("../models/dailySessionModel");

// ===== CREATE OR UPDATE SESSION =====
const addXP = async (userId, sessionDate, addPoints) => {
    return await DailySession.findOneAndUpdate(
        {
            userId,
            sessionDate
        },
        {
            $inc: {
                pointsXP: addPoints
            }
        },
        {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        }
    );
};

module.exports = { addXP };