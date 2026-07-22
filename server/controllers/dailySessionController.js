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

    // Normalize today's date
    const sessionDate = new Date();
    sessionDate.setUTCHours(0, 0, 0, 0);

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

    res.status(200).json({
        success: true,
        message: "XP updated successfully",
        data: session,
    });
});

// @Desc Helper function to fill missing dates
const fillMissingDays = (sessions, numberOfDays) => {

    const sessionMap = new Map();

    sessions.forEach(session => {
        sessionMap.set(
            session.sessionDate.toISOString().split("T")[0],
            session.pointsInXP
        );
    });

    const result = [];

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    for (let i = numberOfDays - 1; i >= 0; i--) {

        const date = new Date(today);
        date.setUTCDate(date.getUTCDate() - i);

        const key = date.toISOString().split("T")[0];

        result.push({
            sessionDate: key,
            pointsInXP: sessionMap.get(key) || 0
        });
    }

    return result;
};

// @Desc    Get past 7 days session data
// @Route   GET /api/session/week/:userId
const getPast7DaysSessions = asyncHandler(async (req, res) => {

    const { userId } = req.params;

    const sessions = await dailySessionService.getPast7DaysSessions(userId);

    const result = fillMissingDays(sessions, 7);

    res.status(200).json({
        success: true,
        count: result.length,
        data: result,
    });
});


// @Desc    Get past 1 year session data
// @Route   GET /api/session/year/:userId
const getPastYearSessions = asyncHandler(async (req, res) => {

    const { userId } = req.params;

    const sessions = await dailySessionService.getPastYearSessions(userId);

    const result = fillMissingDays(sessions, 365);

    res.status(200).json({
        success: true,
        count: result.length,
        data: result,
    });
});

// @Desc    Get session data for a specific year
// @Route   GET /api/session/:username/:year
const getAnyYearSessions = asyncHandler(async (req, res) => {

    const { userId, year } = req.params;

    const sessions = await dailySessionService.getYearSessionsByUsername(
        userId,
        Number(year)
    );

    if (sessions === null) {
        throw Object.assign(
            new Error("User not found"),
            {
                statusCode: 404,
            }
        );
    }

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
        count: result.length,
        data: result,
    });
});

module.exports = {
    addXP,
    getPast7DaysSessions,
    getPastYearSessions,
    getAnyYearSessions
};