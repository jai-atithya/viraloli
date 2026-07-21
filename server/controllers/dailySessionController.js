const asyncHandler = require("express-async-handler");
const dailySessionService = require("../services/dailySessionService");

// @Desc    Add XP to today's session
// @Route   POST /api/daily-session/add-xp
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

module.exports = {
    addXP,
};