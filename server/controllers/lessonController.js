const asyncHandler = require("express-async-handler");
const lessonService = require("../services/lessonService");
const characterService = require("../services/characterService");

// @Desc    Get Lesson by Unit Number & Lesson Number
// @Route   GET /api/lesson/:unitNumber/:lessonNumber
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
    
    if(lessonNumber==2){
        const characters = await characterService.getCharactersInLesson(lessonNumber);
        console.log(characters);
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
        unitId,
        unitNumber,
        lessonNumber,
        type,
        headingEnglish,
        headingTamil,
        descriptionEnglish,
        descriptionTamil,
        required,
    } = req.body;

    // Required fields
    const requiredFields = {
        unitId,
        unitNumber,
        lessonNumber,
        type,
        headingEnglish,
        headingTamil,
        descriptionEnglish,
        descriptionTamil,
        required
    };

    const missingFields = Object.entries(requiredFields)
        .filter(([_, value]) => value === undefined || value === null || value === "")
        .map(([key]) => key);

    if (missingFields.length > 0) {
        throw Object.assign(
            new Error(
                `Missing required field(s): ${missingFields.join(", ")}`
            ),
            { statusCode: 400 }
        );
    }


    // Validate numbers
    if (
        !Number.isInteger(Number(unitNumber)) ||
        Number(unitNumber) <= 0
    ) {
        throw Object.assign(
            new Error("unitNumber must be a positive integer"),
            { statusCode: 400 }
        );
    }

    if (
        !Number.isInteger(Number(lessonNumber)) ||
        Number(lessonNumber) <= 0
    ) {
        throw Object.assign(
            new Error("lessonNumber must be a positive integer"),
            { statusCode: 400 }
        );
    }

    // Check duplicate lesson
    const existingLesson = await lessonService.lessonExists(
        Number(unitNumber),
        Number(lessonNumber)
    );

    if (existingLesson) {
        throw Object.assign(
            new Error(
                `Lesson ${lessonNumber} already exists in Unit ${unitNumber}`
            ),
            { statusCode: 409 }
        );
    }

    if(lessonNumber == 1){
        if(!req.body.videoUrlEnglish || !req.body.videoUrlTamil){
            throw Object.assign(
            new Error(
                `Video URLs is required!`
            ),
            { statusCode: 400 }
        );
        }
    }

    const lesson = await lessonService.addLesson({
        ...req.body,
        unitNumber: Number(unitNumber),
        lessonNumber: Number(lessonNumber),
    });


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