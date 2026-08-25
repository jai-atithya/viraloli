const Word = require("../../models/wordModel");
const words = require("../data/words.json");

const seedWords = async () => {
    try {
        console.log("🌱 Seeding Words...");

        await Word.deleteMany({});

        if (words.length > 0) {
            await Word.insertMany(words);
        }

        console.log(`Words seeded successfully: ${words.length}`);
    } catch (error) {
        console.error("Error seeding Words:", error.message);
        throw error;
    }
};

module.exports = seedWords;