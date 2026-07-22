const asyncHandler = require("express-async-handler");
const unitService = require("../services/unitService");

// @Desc    Get all unit details
// @Route   GET /api/unit/all
const getUnitDetails = asyncHandler(async (req, res) => {

    const units = await unitService.getUnitDetails();

    if (!units) {
        throw Object.assign(
            new Error("Error fetching unit details"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: units.length,
        data: units,
    });
});


// @Desc    Add Unit
// @Route   POST /api/unit/add
const addUnitDetails = asyncHandler(async (req, res) => {

    const {
        unitId,
        unitNumber,
        unitNameEnglish,
        unitNameTamil,
        unitDescriptionEnglish,
        unitDescriptionTamil,
        thumbnail,
        characters
    } = req.body;

    const unit = await unitService.addUnitDetails({
        unitId,
        unitNumber,
        unitNameEnglish,
        unitNameTamil,
        unitDescriptionEnglish,
        unitDescriptionTamil,
        thumbnail,
        characters
    });

    if (!unit) {
        throw Object.assign(
            new Error("Error creating unit"),
            {
                statusCode: 400,
            }
        );
    }

    res.status(201).json({
        success: true,
        message: "Unit created successfully",
        data: unit,
    });
});


// @Desc    Get Current Unit Details
// @Route   GET /api/unit/current
const getCurrentUnitDetails = asyncHandler(async (req, res) => {

    const userId = req.user._id;

    const progress = await unitService.getCurrentUnitDetails(userId);

    if (!progress) {
        throw Object.assign(
            new Error("No progress found for this user"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        data: progress,
    });
});



module.exports = {
    getUnitDetails,
    addUnitDetails,
    getCurrentUnitDetails,
};