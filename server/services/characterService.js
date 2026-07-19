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

// ==== GET ALL CHARACTERS IN A SPECIFIC LESSON  ====
const getCharactersInLesson = async (unlockLesson) => {
    return await Character.find({
        unlockLesson: unlockLesson,
    })
        .sort({ name: 1 })
        .lean();
};

module.exports = {
    getAllCharacters,
    getCharacterByName,
    createCharacter,
    getCharactersUnlockedTillLesson,
    getCharactersInLesson,
};