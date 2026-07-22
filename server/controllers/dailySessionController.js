const asyncHandler = require("express-async-handler");
const dailySessionService = require("../services/dailySessionService");

// @Desc    Add XP to today's session
// @Route   POST /api/session/add-xp
const addXP = asyncHandler(async (req, res) => {

    const { userId, points } = req.body;

    if (!userId || points === undefined) {
        throw Object.assign(
            new Error("userId and points are required"),
            {
                statusCode: 400,
            }
        );
    }

    const sessionDate = new Date();
    sessionDate.setUTCHours(0, 0, 0, 0);

    const userStats = await dailySessionService.getUserStats(userId);

    const session = await dailySessionService.addXP(
        userId,
        sessionDate,
        points
    );

    if (!session) {
        throw Object.assign(
            new Error("Unable to update daily session"),
            {
                statusCode: 400,
            }
        );
    }

    if (!userStats) {

        await dailySessionService.updateUserStats(
            userId,
            1,
            1,
            sessionDate
        );
    }
    else {

        const lastActiveDate = new Date(userStats.lastActiveDate);
        lastActiveDate.setUTCHours(0, 0, 0, 0);

        // Already updated streak for today
        if (lastActiveDate.getTime() !== sessionDate.getTime()) {

            const diffDays = Math.floor(
                (sessionDate - lastActiveDate) / (1000 * 60 * 60 * 24)
            );

            let currentStreak = 1;

            if (diffDays === 1) {
                currentStreak = userStats.currentStreak + 1;
            }

            const maxStreak = Math.max(
                userStats.maxStreak,
                currentStreak
            );

            await dailySessionService.updateUserStats(
                userId,
                currentStreak,
                maxStreak,
                sessionDate
            );
        }
    }

    res.status(200).json({
        success: true,
        message: "XP updated successfully",
        data: session,
    });
});

// ===== Helper =====
const fillMissingDays = (sessions, startDate, numberOfDays) => {

    const sessionMap = new Map();

    sessions.forEach(session => {
        sessionMap.set(
            session.sessionDate.toISOString().split("T")[0],
            session.pointsInXP
        );
    });

    const result = [];

    for (let i = 0; i < numberOfDays; i++) {

        const date = new Date(startDate);
        date.setUTCDate(startDate.getUTCDate() + i);

        const key = date.toISOString().split("T")[0];

        result.push({
            sessionDate: key,
            pointsInXP: sessionMap.get(key) ?? 0,
        });
    }

    return result;
};

// @Desc    Get past 7 days session data
// @Route   GET /api/session/week/:userId
const getPast7DaysSessions = asyncHandler(async (req, res) => {

    const { userId } = req.params;

    const sessions = await dailySessionService.getPast7DaysSessions(userId);

    const userStats = await dailySessionService.getUserStats(userId);

    const startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);
    startDate.setUTCDate(startDate.getUTCDate() - 6);

    const result = fillMissingDays(
        sessions,
        startDate,
        7
    );

    res.status(200).json({
        success: true,
        currentStreak: userStats?.currentStreak ?? 0,
        maxStreak: userStats?.maxStreak ?? 0,
        count: result.length,
        data: result,
    });
});

// @Desc    Get past 1 year session data
// @Route   GET /api/session/year/:userId
const getPastYearSessions = asyncHandler(async (req, res) => {

    const { userId } = req.params;

    const sessions = await dailySessionService.getPastYearSessions(userId);

    const userStats = await dailySessionService.getUserStats(userId);

    const activeDays = sessions.length;

    const startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);
    startDate.setUTCFullYear(startDate.getUTCFullYear() - 1);

    const result = fillMissingDays(
        sessions,
        startDate,
        365
    );

    res.status(200).json({
        success: true,
        activeDays,
        currentStreak: userStats?.currentStreak ?? 0,
        maxStreak: userStats?.maxStreak ?? 0,
        count: result.length,
        data: result,
    });
});

// @Desc    Get session data for a specific year
// @Route   GET /api/session/:userId/:year
const getAnyYearSessions = asyncHandler(async (req, res) => {

    const { userId, year } = req.params;

    const sessions = await dailySessionService.getAnyYearSessions(
        userId,
        Number(year)
    );

    const userStats = await dailySessionService.getUserStats(userId);

    const activeDays = sessions.length;

    const startDate = new Date(Date.UTC(Number(year), 0, 1));

    const isLeapYear =
        (Number(year) % 4 === 0 && Number(year) % 100 !== 0) ||
        Number(year) % 400 === 0;

    const result = fillMissingDays(
        sessions,
        startDate,
        isLeapYear ? 366 : 365
    );

    res.status(200).json({
        success: true,
        year: Number(year),
        activeDays,
        currentStreak: userStats?.currentStreak ?? 0,
        maxStreak: userStats?.maxStreak ?? 0,
        count: result.length,
        data: result,
    });
});

module.exports = {
    addXP,
    getPast7DaysSessions,
    getPastYearSessions,
    getAnyYearSessions,
};