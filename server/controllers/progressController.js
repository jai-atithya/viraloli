const asyncHandler = require("express-async-handler");
const progressService = require("../services/progressService");
const unitService = require("../services/unitService");

// @Desc    Update Lesson Progress
// @Route   POST /api/progress
const updateLessonProgress = asyncHandler(async (req, res) => {
    const { unitId, lessonNo, wpm, cpm, accuracy } = req.body;

    // validation...

    const unit = await unitService.getUnitById(unitId);

    if (!unit) {
        return res.status(404).json({
            success: false,
            message: "Unit not found.",
        });
    }

    let progress = await progressService.getProgress(
        req.user._id,
        unitId
    );

    // Doesn't exist

    if (!progress) {

        // Only Lesson 1 can create a progress document

        if (lessonNo !== 1) {
            return res.status(403).json({
                success: false,
                message: "Complete Lesson 1 first.",
            });
        }

        progress = await progressService.createProgress(
            req.user._id,
            unitId
        );
    }

    // Check unlock

    if (lessonNo > 1) {

        const previousLesson = progress[`lesson${lessonNo - 1}`];

        if (previousLesson.stars < 1) {
            return res.status(403).json({
                success: false,
                message: `Lesson ${lessonNo} is locked.`,
            });
        }
    }

    // Calculate stars

    let stars = 0;

    if (accuracy >= 95) stars = 3;
    else if (accuracy >= 85) stars = 2;
    else if (accuracy >= 70) stars = 1;

    const updatedProgress = await progressService.updateLesson(
        progress._id,
        lessonNo,
        wpm,
        cpm,
        accuracy,
        stars
    );

    return res.status(200).json({
        success: true,
        message: "Progress updated successfully.",
        progress: updatedProgress,
    });
});

// @Desc    Get Progress by User & Unit
// @Route   GET /api/progress/:userId/:unitId
const getProgress = asyncHandler(async (req, res) => {
    const { userId, unitId } = req.params;

    if (!userId || !unitId) {
        return res.status(400).json({
            success: false,
            message: "User ID and Unit ID are required.",
        });
    }

    const progress = await progressService.getProgress(userId, unitId);

    if (!progress) {
        return res.status(404).json({
            success: false,
            message: "Progress not found.",
        });
    }

    return res.status(200).json({
        success: true,
        progress,
    });
});

module.exports = {
    updateLessonProgress,
    getProgress
};