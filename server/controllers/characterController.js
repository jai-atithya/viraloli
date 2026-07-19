const asyncHandler = require("express-async-handler");
const characterService = require("../services/characterService");

// @Desc    Get all characters
// @Route   GET /api/characters
const getAllCharacters = asyncHandler(async (req, res) => {

    const characters = await characterService.getAllCharacters();

    if (!characters) {
        throw Object.assign(
            new Error("Error fetching characters"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: characters.length,
        data: characters,
    });
});

// @Desc    Create a character
// @Route   POST /api/characters
const createCharacter = asyncHandler(async (req, res) => {

    const { name, unlockLesson, keyMap } = req.body || {};

    if (!name || !unlockLesson || !keyMap) {
        throw Object.assign(
            new Error("Required fields are missing"),
            {
                statusCode: 400,
            }
        );
    }

    const existingCharacter = await characterService.getCharacterByName(name);

    if (existingCharacter) {
        throw Object.assign(
            new Error("Character already exists"),
            {
                statusCode: 400,
            }
        );
    }

    const characterPayload = {
        name,
        unlockLesson,
        keyMap,
    };

    const character = await characterService.createCharacter(characterPayload);

    if (!character) {
        throw Object.assign(
            new Error("Failed to create character"),
            {
                statusCode: 500,
            }
        );
    }

    res.status(201).json({
        success: true,
        data: character,
        message: "Character created successfully",
    });
});

// @Desc    Get all characters unlocked till a lesson
// @Route   GET /api/characters/all/lesson/:unlockLesson
const getAllCharactersUnlocked = asyncHandler(async (req, res) => { 

    const { unlockLesson } = req.params;

    if (!unlockLesson || isNaN(unlockLesson)) {
        throw Object.assign(
            new Error("Valid unlockLesson parameter is required"),
            {
                statusCode: 400,
            }
        );
    }

    const characters = await characterService.getCharactersUnlockedTillLesson(
        Number(unlockLesson)
    );

    if (!characters) {
        throw Object.assign(
            new Error("No unlocked characters found"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: characters.length,
        data: characters,
    });
});

// @Desc    Get all characters in a specific lesson
// @Route   GET /api/characters/all/lesson/only/:unlockLesson
const getAllCharacterInLesson = asyncHandler(async (req, res) => {

    const { unlockLesson } = req.params;

    if (!unlockLesson || isNaN(unlockLesson)) {
        throw Object.assign(
            new Error("Valid unlockLesson parameter is required"),
            {
                statusCode: 400,
            }
        );
    }

    const characters = await characterService.getCharactersInLesson(
        Number(unlockLesson)
    );

    if (!characters) {
        throw Object.assign(
            new Error("No characters found for this lesson"),
            {
                statusCode: 404,
            }
        );
    }

    res.status(200).json({
        success: true,
        count: characters.length,
        data: characters,
    });
});

// @Desc    Generate a random practice lesson
// @Route   POST /api/characters/random
const getRandomCharactersUnlocked = asyncHandler(async (req, res) => {

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

    const characters = onlyInLesson
        ? await characterService.getCharactersInLesson(Number(unlockLesson))
        : await characterService.getCharactersUnlockedTillLesson(Number(unlockLesson));

    if (!characters.length) {
        throw Object.assign(
            new Error("No characters found"),
            {
                statusCode: 404,
            }
        );
    }

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const words = [];
    const totalLength = 50;

    while (words.join(" ").length < totalLength) {

        // random word length between 1 and 5 characters
        const wordLength = Math.floor(Math.random() * 5) + 1;

        let word = "";
        const units = [];

        for (let i = 0; i < wordLength; i++) {
            const ch = getRandom(characters);

            word += ch.name;
            units.push({
                text: ch.name,
                keys: ch.keyMap.flat(),
            });
        }

        words.push({
            word,
            units,
        });
    }

    const lesson = {
        sentence: words.map(w => w.word).join(" ").substring(0, totalLength),
        units: [],
    };

    words.forEach((w, index) => {
        lesson.units.push(...w.units);

        if (index !== words.length - 1) {
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
    lesson.units = lesson.units.filter((u) => {
        if (count >= lesson.sentence.length) return false;
        count += u.text.length;
        return true;
    });

    res.status(200).json({
        success: true,
        lesson,
    });
});

module.exports = {
    getAllCharacters,
    createCharacter,
    getAllCharactersUnlocked,
    getAllCharacterInLesson,
    getRandomCharactersUnlocked
};