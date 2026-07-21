const Progress = require("../models/progressModel");

// ==== GET PROGRESS ====
const getProgress = async (userId, unitId) => {
    return await Progress.findOne({ userId, unitId });
};

// ==== CREATE DUMMY PROGRESS ====
const createProgress = async (userId, unitId) => {
    return await Progress.create({
        userId,
        unitId,
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

module.exports = {
    getProgress,
    createProgress,
    updateLesson,
};