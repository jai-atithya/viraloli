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

// ==== GENERATE RANDOM WORD PRACTICE LESSON ====
const generateRandomWordsLesson = async (
    unlockLesson,
    onlyInLesson,
    totalLength = 50
) => {
    const words = onlyInLesson
        ? await getWordsInLesson(unlockLesson)
        : await getWordsUnlockedTillLesson(unlockLesson);

    if (!words.length) {
        return null;
    }

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const selectedWords = [];

    while (selectedWords.map((w) => w.word).join(" ").length < totalLength) {
        selectedWords.push(getRandom(words));
    }

    const lesson = {
        sentence: selectedWords
            .map((w) => w.word)
            .join(" ")
            .substring(0, totalLength),
        units: [],
    };

    selectedWords.forEach((word, index) => {
        lesson.units.push(...word.units);

        if (index !== selectedWords.length - 1) {
            lesson.units.push({
                text: " ",
                keys: [
                    {
                        code: "Space",
                        altKey: false,
                        ctrlKey: false,
                        shiftKey: false,
                        metaKey: false,
                    },
                ],
            });
        }
    });

    // Trim units to match sentence length
    let count = 0;
    lesson.units = lesson.units.filter((unit) => {
        if (count >= lesson.sentence.length) return false;
        count += unit.text.length;
        return true;
    });

    return lesson;
};

module.exports = {
    getAllWords,
    getWordByName,
    createWord,
    getWordsUnlockedTillLesson,
    getWordsInLesson,
    generateRandomWordsLesson,
};