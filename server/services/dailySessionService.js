const DailySession = require("../models/dailySessionModel");
const UserStats = require("../models/userStatsModel");

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
    startDate.setUTCDate(startDate.getUTCDate() - 364);

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

// ===== GET A PARTICULAR YEAR'S SESSION =====
const getAnyYearSessions = async (userId, year) => {

    const startDate = new Date(Date.UTC(year, 0, 1));
    const endDate = new Date(Date.UTC(year + 1, 0, 1));

    return await DailySession.find({
        userId,
        sessionDate: {
            $gte: startDate,
            $lt: endDate,
        },
    })
        .sort({ sessionDate: 1 })
        .lean();
};

// ===== GET USER STATS =====
const getUserStats = async (userId) => {
    return await UserStats.findOne({ userId }).lean();
};

// ===== CREATE OR UPDATE USER STATS =====
const updateUserStats = async (
    userId,
    currentStreak,
    maxStreak,
    lastActiveDate
) => {
    return await UserStats.findOneAndUpdate(
        { userId },
        {
            currentStreak,
            maxStreak,
            lastActiveDate,
        },
        {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
        }
    ).lean();
};

module.exports = {
    addXP,
    getPast7DaysSessions,
    getPastYearSessions,
    getAnyYearSessions,
    getUserStats,
    updateUserStats,
};
