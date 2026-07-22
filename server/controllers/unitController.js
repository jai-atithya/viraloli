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
        unitNumber,
        unitNameEnglish,
        unitNameTamil,
        unitDescriptionEnglish,
        unitDescriptionTamil,
        thumbnail,
        characters,
    } = req.body || {};

    // Required field validation
    if (
        unitNumber == null ||
        !unitNameEnglish ||
        !unitNameTamil ||
        !unitDescriptionEnglish ||
        !unitDescriptionTamil ||
        !thumbnail ||
        !characters
    ) {
        throw Object.assign(
            new Error("All fields are required"),
            { statusCode: 400 }
        );
    }

    // Check duplicate unit number
    const existingUnit = await unitService.getUnitByNumber(unitNumber);

    if (existingUnit) {
        throw Object.assign(
            new Error("Unit number already exists"),
            { statusCode: 409 }
        );
    }

    // Validate characters
    const requiredCharacters = [
        "character1",
        "character2",
        "character3",
        "character4",
        "character5",
        "character6",
        "character7",
    ];

    for (const characterKey of requiredCharacters) {

        const character = characters[characterKey];

        if (!character) {
            throw Object.assign(
                new Error(`${characterKey} is required`),
                { statusCode: 400 }
            );
        }

        const {
            nameEnglish,
            nameTamil,
            descriptionEnglish,
            descriptionTamil,
            url,
        } = character;

        if (
            !nameEnglish ||
            !nameTamil ||
            !descriptionEnglish ||
            !descriptionTamil ||
            !url
        ) {
            throw Object.assign(
                new Error(`All fields are required for ${characterKey}`),
                { statusCode: 400 }
            );
        }
    }

    const unit = await unitService.addUnitDetails({
        unitNumber,
        unitNameEnglish,
        unitNameTamil,
        unitDescriptionEnglish,
        unitDescriptionTamil,
        thumbnail,
        characters,
    });

    res.status(201).json({
        success: true,
        message: "Unit created successfully",
        data: unit,
    });
});




module.exports = {
    getUnitDetails,
    addUnitDetails,
};