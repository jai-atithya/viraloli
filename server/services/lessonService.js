const Lesson = require("../models/lessonModel");

// ==== GET LESSON BY UNIT NUMBER & LESSON NUMBER ====
const getLessonByNumber = async (unitNumber, lessonNumber) => {
    return await Lesson.findOne({
        unitNumber,
        lessonNumber,
    }).lean();
};

// ==== CHECK IF LESSON EXISTS ====
const lessonExists = async (unitNumber, lessonNumber) => {
    return await Lesson.findOne({
        unitNumber,
        lessonNumber,
    }).lean();
};


// ==== ADD LESSON ====
const addLesson = async (lessonData) => {
    return await Lesson.create(lessonData);
};

module.exports = {
    getLessonByNumber,
    lessonExists,
    addLesson,
};