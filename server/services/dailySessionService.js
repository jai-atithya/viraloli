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

<<<<<<< HEAD
// ===== GET PAST 7 DAYS SESSION =====
const getPast7DaysSessions = async (userId) => {

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setUTCDate(startDate.getUTCDate() - 6);

    return await DailySession.find({
        userId,
        sessionDate: {
            $gte: startDate,
            $lte: today,
        },
    })
        .sort({ sessionDate: 1 })
        .lean();
};

// ===== GET PAST 1 YEAR SESSION =====
const getPastYearSessions = async (userId) => {

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setUTCFullYear(startDate.getUTCFullYear() - 1);

    return await DailySession.find({
        userId,
        sessionDate: {
            $gte: startDate,
            $lte: today,
        },
    })
        .sort({ sessionDate: 1 })
        .lean();
};

module.exports = {
    addXP,
    getPast7DaysSessions,
    getPastYearSessions,
};
=======
module.exports = { addXP };
>>>>>>> 7f1a67e (session creation done)
