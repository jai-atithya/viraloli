const Progress = require("../models/progressModel");
const unitService = require("./unitService");

// ==== GET PROGRESS ====
const getProgress = async (userId, unitId) => {
    return await Progress.findOne({ userId, unitId });
};

// ==== CREATE DUMMY PROGRESS ====
const createProgress = async (userId, unitNumber) => {

    const unit = await unitService.getUnitByNumber(unitNumber);

    if (!unit) {
        return null;
    }

    return await Progress.create({
        userId,
        unitId: unit._id,
        unitNumber: unit.unitNumber,
        unitNameEnglish: unit.unitNameEnglish,
        unitNameTamil: unit.unitNameTamil,
        unitDescriptionEnglish: unit.unitDescriptionEnglish,
        unitDescriptionTamil: unit.unitDescriptionTamil,
        thumbnail: unit.thumbnail,
        characters: {
            character1: {
                ...unit.characters.character1,
                isUnlocked: true,
            },
            character2: {
                ...unit.characters.character2,
                isUnlocked: false,
            },
            character3: {
                ...unit.characters.character3,
                isUnlocked: false,
            },
            character4: {
                ...unit.characters.character4,
                isUnlocked: false,
            },
            character5: {
                ...unit.characters.character5,
                isUnlocked: false,
            },
            character6: {
                ...unit.characters.character6,
                isUnlocked: false,
            },
            character7: {
                ...unit.characters.character7,
                isUnlocked: false,
            },
        },
    });
};

// ==== UPDATE LESSON ====
const updateLesson = async (
    progressId,
    lessonNo,
    wpm,
    cpm,
    accuracy,
    stars
) => {

    const lessonKey = `lesson${lessonNo}`;

    return await Progress.findByIdAndUpdate(
        progressId,
        {
            $set: {
                [`${lessonKey}.wpm`]: wpm,
                [`${lessonKey}.cpm`]: cpm,
                [`${lessonKey}.accuracy`]: accuracy,
                [`${lessonKey}.stars`]: stars,
            },
        },
        { new: true }
    );
};

// ==== GET CURRENT UNIT DETAILS ====
const getCurrentProgressDetails = async (userId) => {
    return Progress.findOne({ userId })
        .sort({ createdAt: -1 })
        .lean();
};




module.exports = {
    getProgress,
    createProgress,
    updateLesson,
    getProgress,
    getCurrentProgressDetails,
};