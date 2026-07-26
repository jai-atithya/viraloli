const Character = require("../models/characterModel");

// ==== GET ALL CHARACTERS ====
const getAllCharacters = async () => {
    return await Character.find({})
        .sort({ unlockLesson: 1 })
        .lean();
};

// ==== GET CHARACTER BY NAME ====
const getCharacterByName = async (name) => {
    return await Character.findOne({ name });
};

// ==== CREATE CHARACTER ====
const createCharacter = async (characterData) => {
    return await Character.create(characterData);
};

// ==== GET CHARACTERS UNLOCKED TILL LESSON ====
const getCharactersUnlockedTillLesson = async (unlockLesson) => {
    return await Character.find({
        unlockLesson: { $lte: unlockLesson },
    })
        .sort({ unlockLesson: 1 })
        .lean();
};

// ==== GET ALL CHARACTERS IN A SPECIFIC LESSON ====
const getCharactersInLesson = async (unlockLesson) => {
    return await Character.find({
        unlockLesson,
    })
        .sort({ name: 1 })
        .lean();
};

const getMaxUnlockLessonByNames = async (names) => {
    return await Character.findOne(
        { name: { $in: names } },
        { unlockLesson: 1, _id: 0 }
    )
        .sort({ unlockLesson: -1 })
        .lean();
};

// ==== GENERATE RANDOM PRACTICE LESSON ====
const generateRandomCharactersLesson = async (
    unlockLesson,
    onlyInLesson,
    totalLength = 50
) => {
    const characters = onlyInLesson
        ? await getCharactersInLesson(unlockLesson)
        : await getCharactersUnlockedTillLesson(unlockLesson);

    if (!characters.length) {
        return null;
    }

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const words = [];

    while (words.join(" ").length < totalLength) {
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
        sentence: words.map((w) => w.word).join(" ").substring(0, totalLength),
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

    let count = 0;
    lesson.units = lesson.units.filter((u) => {
        if (count >= lesson.sentence.length) return false;
        count += u.text.length;
        return true;
    });

    return lesson;
};

module.exports = {
    getAllCharacters,
    getCharacterByName,
    createCharacter,
    getCharactersUnlockedTillLesson,
    getCharactersInLesson,
    getMaxUnlockLessonByNames,
    generateRandomCharactersLesson,
};