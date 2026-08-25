const Game = require("../../models/gameModel");
const games = require("../data/games.json");

const seedGames = async () => {
    try {
        console.log("🌱 Seeding Games...");

        await Game.deleteMany({});

        if (games.length > 0) {
            await Game.insertMany(games);
        }

        console.log(`Games seeded successfully: ${games.length} records`);
    } catch (error) {
        console.error("Error seeding Games:", error.message);
        throw error;
    }
};

module.exports = seedGames;