const asyncHandler = require("express-async-handler");
const lessonService = require("../services/lessonService");

// @Desc    Get Lesson by Unit Number & Lesson Number
// @Route   GET /api/lesson/get/:unitNumber/:lessonNumber
const getLessonByNumber = asyncHandler(async (req, res) => {

    const { unitNumber, lessonNumber } = req.params;

    const lesson = await lessonService.getLessonByNumber(
        Number(unitNumber),
        Number(lessonNumber)
    );

    if (!lesson) {
        throw Object.assign(
            new Error("Lesson not found"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        data: lesson,
    });
});


// @Desc    Add Lesson
// @Route   POST /api/lesson/add
const addLesson = asyncHandler(async (req, res) => {

    const {
        unitNumber,
        lessonNumber,
    } = req.body;

    if (!unitNumber || !lessonNumber) {
        throw Object.assign(
            new Error("unitNumber and lessonNumber are required"),
            {
                statusCode: 400,
            }
        );
    }

    const existingLesson = await lessonService.lessonExists(
        unitNumber,
        lessonNumber
    );

    if (existingLesson) {
        throw Object.assign(
            new Error(
                `Lesson ${lessonNumber} already exists in Unit ${unitNumber}`
            ),
            {
                statusCode: 409,
            }
        );
    }

    const lesson = await lessonService.addLesson(req.body);

    res.status(201).json({
        success: true,
        message: "Lesson created successfully",
        data: lesson,
    });
});

module.exports = {
    getLessonByNumber,
    addLesson,
};