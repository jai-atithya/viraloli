const asyncHandler = require("express-async-handler");
const wordService = require("../services/wordService");
const characterService = require("../services/characterService");
const {getMappings} = require("../utils/getMappings");

// @Desc    Get all words
// @Route   GET /api/words/all
const getAllWords = asyncHandler(async (req, res) => {

    const words = await wordService.getAllWords();

    if (!words) {
        throw Object.assign(
            new Error("Error fetching words"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: words.length,
        data: words,
    });
});

// @Desc    Create a word
// @Route   POST /api/words/add
const createWord = asyncHandler(async (req, res) => {

    const { name } = req.body || {};

    if (!name) {
        throw Object.assign(
            new Error("Word name is required"),
            {
                statusCode: 400,
            }
        );
    }

    const existingWord = await wordService.getWordByName(name);

    if (existingWord) {
        throw Object.assign(
            new Error("Word already exists"),
            {
                statusCode: 400,
            }
        );
    }

    // Get mappings for the word
    const mappingResult = getMappings(name);

    // Matches the Word schema
    const keyMap = mappingResult.units;

    // Extract unique characters
    const uniqueCharacters = [...new Set(keyMap.map(unit => unit.text))];

    // Find the maximum unlock lesson among the characters
    const maxCharacter = await characterService.getMaxUnlockLessonByNames(uniqueCharacters);

    if (!maxCharacter) {
        throw Object.assign(
            new Error("One or more characters do not exist"),
            {
                statusCode: 400,
            }
        );
    }

    const word = await wordService.createWord({
        name,
        unlockLesson: maxCharacter.unlockLesson,
        keyMap,
    });

    if (!word) {
        throw Object.assign(
            new Error("Failed to create word"),
            {
                statusCode: 500,
            }
        );
    }

    res.status(201).json({
        success: true,
        data: word,
        message: "Word created successfully",
    });
});

// @Desc    Get all words unlocked till lesson
// @Route   GET /api/words/all/lesson/:unlockLesson
const getAllWordsUnlocked = asyncHandler(async (req, res) => {

    const { unlockLesson } = req.params;

    if (!unlockLesson || isNaN(unlockLesson)) {
        throw Object.assign(
            new Error("Valid unlockLesson parameter is required"),
            {
                statusCode: 400,
            }
        );
    }

    const words = await wordService.getWordsUnlockedTillLesson(
        Number(unlockLesson)
    );

    if (!words) {
        throw Object.assign(
            new Error("No unlocked words found"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: words.length,
        data: words,
    });
});

// @Desc    Get all words in a lesson
// @Route   GET /api/words/all/lesson/only/:unlockLesson
const getAllWordsInLesson = asyncHandler(async (req, res) => {

    const { unlockLesson } = req.params;

    if (!unlockLesson || isNaN(unlockLesson)) {
        throw Object.assign(
            new Error("Valid unlockLesson parameter is required"),
            {
                statusCode: 400,
            }
        );
    }

    const words = await wordService.getWordsInLesson(
        Number(unlockLesson)
    );

    if (!words) {
        throw Object.assign(
            new Error("No words found for this lesson"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: words.length,
        data: words,
    });
});

// @Desc    Generate a random word practice lesson
// @Route   POST /api/words/random
const getRandomWordsUnlocked = asyncHandler(async (req, res) => {

    const { unlockLesson, onlyInLesson } = req.body || {};

    if (
        unlockLesson === undefined ||
        typeof onlyInLesson !== "boolean" ||
        isNaN(unlockLesson)
    ) {
        throw Object.assign(
            new Error("unlockLesson and onlyInLesson are required"),
            {
                statusCode: 400,
            }
        );
    }

    const words = onlyInLesson
        ? await wordService.getWordsInLesson(Number(unlockLesson))
        : await wordService.getWordsUnlockedTillLesson(Number(unlockLesson));

    if (!words.length) {
        throw Object.assign(
            new Error("No words found"),
            {
                statusCode: 404,
            }
        );
    }

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const selectedWords = [];
    const totalLength = 50;

    while (selectedWords.map(w => w.name).join(" ").length < totalLength) {
        selectedWords.push(getRandom(words));
    }

    const lesson = {
        sentence: "",
        units: [],
    };

    for (let i = 0; i < selectedWords.length; i++) {

        const word = selectedWords[i];

        lesson.sentence += word.name;

        lesson.units.push(...word.keyMap);

        if (i !== selectedWords.length - 1) {

            lesson.sentence += " ";

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

        if (lesson.sentence.length >= totalLength) {
            break;
        }
    }

    lesson.sentence = lesson.sentence.substring(0, totalLength);

    let count = 0;

    lesson.units = lesson.units.filter((unit) => {

        if (count >= lesson.sentence.length) {
            return false;
        }

        count += unit.text.length;

        return true;
    });

    res.status(200).json({
        success: true,
        lesson,
    });
});

module.exports = {
    getAllWords,
    createWord,
    getAllWordsUnlocked,
    getAllWordsInLesson,
    getRandomWordsUnlocked,
};