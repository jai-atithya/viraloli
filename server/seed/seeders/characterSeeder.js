const Character = require("../../models/characterModel");
const characters = require("../data/characters.json");

const seedCharacters = async () => {
    try {
        console.log("🌱 Seeding Characters...");

        await Character.deleteMany({});

        if (characters.length > 0) {
            await Character.insertMany(characters);
        }

        console.log(`Characters seeded successfully: ${characters.length}`);
    } catch (error) {
        console.error("Error seeding Characters:", error.message);
        throw error;
    }
};

module.exports = seedCharacters;