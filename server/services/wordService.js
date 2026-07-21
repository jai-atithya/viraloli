const Word = require("../models/wordModel");

// ==== GET ALL WORDS ====
const getAllWords = async () => {
    return await Word.find({})
        .sort({ unlockLesson: 1 })
        .lean();
};

// ==== GET WORD BY NAME ====
const getWordByName = async (name) => {
    return await Word.findOne({ name });
};

// ==== CREATE WORD ====
const createWord = async (wordData) => {
    return await Word.create(wordData);
};

// ==== GET WORDS UNLOCKED TILL LESSON ====
const getWordsUnlockedTillLesson = async (unlockLesson) => {
    return await Word.find({
        unlockLesson: { $lte: unlockLesson },
    })
        .sort({ unlockLesson: 1 })
        .lean();
};

// ==== GET WORDS IN A LESSON ====
const getWordsInLesson = async (unlockLesson) => {
    return await Word.find({
        unlockLesson,
    })
        .sort({ name: 1 })
        .lean();
};

module.exports = {
    getAllWords,
    getWordByName,
    createWord,
    getWordsUnlockedTillLesson,
    getWordsInLesson,
};